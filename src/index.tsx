import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(<>시간표 만들어드립니다</>)
