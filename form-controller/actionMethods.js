
let does = {
  setConstruct: (actionable, data) => {
    let val = data.question.documentSelects.find(select => select.id === data.question.value)
    actionable.question = { ...actionable.question, ...val.setConstruct }
  }
}




export default (data, {questions: currentQuestion}) => {
  if(data.action){
    console.log('actions methods',data.action, currentQuestion)
    data.action.forEach(action => {
      let actionable = currentQuestion.find( question => question.question.titleId === action.id )
      if(actionable){
        does[action.do](actionable, data)
      }
    })
  }
}
