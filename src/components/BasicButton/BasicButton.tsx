import "./BasicButton.css"

type ButtonSize = "normal" | "medium" | "small"

type BasicButtonParams = {
  label: string
  size: ButtonSize
}

function getClassName(size:ButtonSize) {
  return "BasicButton size-"+size 
}

function BasicButton(params: BasicButtonParams) {
  return <button className={getClassName(params.size)}>{params.label}</button>
}

export default BasicButton