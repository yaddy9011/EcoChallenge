import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type TableData = { id: number | string; [key: string]: any }

type DBContextType = {
  getAll: <T>(table: string, defaultValue?: T[]) => T[]
  getById: <T>(table: string, id: number | string) => T | undefined
  create: <T extends TableData>(table: string, item: Omit<T, "id">) => T
  update: <T extends TableData>(table: string, id: number | string, updates: Partial<T>) => T | undefined
  remove: (table: string, id: number | string) => void
  clearTable: (table: string) => void
}

const DBContext = createContext<DBContextType | undefined>(undefined)

export function DBProvider({ children }: { children: ReactNode }) {
  const [db, setDb] = useState<{ [table: string]: TableData[] }>({})

  useEffect(() => {
    const storedData: { [table: string]: TableData[] } = {}
    Object.keys(localStorage).forEach((key) => {
      try {
        storedData[key] = JSON.parse(localStorage.getItem(key) || "[]")
      } catch {
        storedData[key] = []
      }
    })
    setDb(storedData)
  }, [])

  const saveTable = (table: string, data: TableData[]) => {
    localStorage.setItem(table, JSON.stringify(data))
    setDb((prev) => ({ ...prev, [table]: data }))
  }

  const getAll = <T,>(table: string, defaultValue: T[] = []): T[] => {
    return (db[table] as T[] | undefined) ?? defaultValue
  }

  const getById = <T,>(table: string, id: number | string): T | undefined => {
    return (db[table] as T[])?.find((item: any) => item.id === id)
  }

  const create = <T extends TableData>(table: string, item: Omit<T, "id">): T => {
    const tableData = db[table] || []
    const newItem = { id: crypto.randomUUID(), ...item } as T
    saveTable(table, [...tableData, newItem])
    return newItem
  }

  const update = <T extends TableData>(
    table: string,
    id: number | string,
    updates: Partial<T>
  ): T | undefined => {
    const tableData = db[table] || []
    const index = tableData.findIndex((item) => item.id === id)
    if (index === -1) return undefined
    const updatedItem = { ...tableData[index], ...updates }
    const newData = [...tableData]
    newData[index] = updatedItem
    saveTable(table, newData)
    return updatedItem as T
  }

  const remove = (table: string, id: number | string) => {
    const tableData = db[table] || []
    const newData = tableData.filter((item) => item.id !== id)
    saveTable(table, newData)
  }

  const clearTable = (table: string) => {
    saveTable(table, [])
  }

  return (
    <DBContext.Provider value={{ getAll, getById, create, update, remove, clearTable }}>
    {children}
    </DBContext.Provider>
  )
}

export function useDB() {
  const context = useContext(DBContext)
  if (!context) throw new Error("useDB debe usarse dentro de DBProvider")
  return context
}
