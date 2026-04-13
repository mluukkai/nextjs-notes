const notes = [
  { content: "next.js utilizes React Server Components", important: true },
  { content: "next.js is built on top of React", important: true },
  {
    content: "next.js supports both static and dynamic rendering",
    important: false,
  },
]

export const getNotes = () => {
  return notes
}

export const addNote = (content: string, important: boolean) => {
  notes.push({ content, important })
}
