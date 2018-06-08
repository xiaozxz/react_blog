
//load示例-{type（类型）:'xx',value:''（状态bool）}  
export const addLoading = (load) => {
  return {type: 'ADD_LOADING', load}
}
/******  文章栏目相关  ******/
export const addArtcle = (artcle) => {
  debugger
  setTimeout(() => {
   
  }, 2000);
  return {type: 'DIS_ADD_ARTCLE', artcle}
}
export const getArtcles = (condition) => {
  return {type: 'GET_ARTCLES', condition}
}

export const setArtcles = (data) => {
  return {type: 'SET_ARTCLES', data}
}