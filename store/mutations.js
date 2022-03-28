import {
    FETCH_RESUME,
    SET_SEARCHDATA,
    GET_RECRUIT,
    GET_RECRUIT_MAIN,
    GET_RECRUIT_SERVE,
    FETCH_APPLY,
    SELECTED_COMPANY,
    GET_ENTINFO,
    GET_RESUMELIST,
    SEARCH_HISTORY,
    GET_FILELIST,
    GET_APPLICATION_HISTORY,
    SEARCH_WORD,
    SHOW_MODAL,
    SHOW_CS,
    GET_COMM,
    GET_TAGLIST,
} from './mutation-types'

export default {
    [FETCH_RESUME] (state, resumeData) {
        state.resumeData = resumeData
    },
    [SET_SEARCHDATA] (state, searchJobData) {
        state.searchJobData = searchJobData
    },
    [GET_RECRUIT] (state, recruitData){
        state.recruitData = recruitData;
    },
    [GET_RECRUIT_MAIN] (state, recruitMain){
        state.recruitMain = JSON.parse(JSON.stringify(recruitMain));
    },
    [GET_RECRUIT_SERVE] (state, recruitServe){
        state.recruitServe = JSON.parse(JSON.stringify(recruitServe));
    },
    [FETCH_APPLY] (state, seletedApply){
        state.seletedApply = seletedApply;
    },
    [SELECTED_COMPANY] (state, selectedCompany){
        state.selectedCompany = selectedCompany;
    },
    [GET_ENTINFO] (state, entInfo){
        state.entInfo = entInfo;
    },
    [GET_RESUMELIST] (state, resumeList){
        state.resumeList = resumeList
    },
    [SEARCH_HISTORY] (state, searchHistory){
        state.searchHistory = searchHistory
    },
    [SEARCH_WORD] (state, searchWord){
        state.searchWord = searchWord
    },
    [GET_FILELIST] (state, fileList){
        state.fileList = fileList
    },
    [GET_APPLICATION_HISTORY] (state, applyHistory){
        state.applyHistory = applyHistory;
    },
    [SHOW_MODAL] (state, showModal){
        state.showModal = showModal;
    },
    [SHOW_CS] (state, showCs){
        state.showCs = showCs;
    },
    [GET_COMM] (state, comm){
        state.comm = comm;
    },
    [GET_TAGLIST] (state, tagData){
        state.tagData = tagData;
    }
}