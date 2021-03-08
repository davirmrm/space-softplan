
import { useSelector } from 'react-redux'

const Language = (c) => {
  const language = useSelector(state => state.appState.language)
  return `${c?c:'./'}nls/${language?language:'pt-BR'}.json`
}

export default Language