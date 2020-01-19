const state = {
  imageFilePath: undefined,
  ocrSpaceApiKey: 'yourkey',
  oriLang: 'eng',
  transLang: 'chs',
  oriText: '',
  transText: ''
}

const mutations = {
  setImageFilePath (state, newImageFilePath) {
    state.imageFilePath = newImageFilePath;
  },
  setOcrSpaceApiKey (state, newOcrSpaceApiKey) {
    state.ocrSpaceApiKey = newOcrSpaceApiKey;
  },
  setOriLang (state, newOriLang) {
    state.oriLang = newOriLang;
  },
  setTransLang (state, newTransLang) {
    state.transLang = newTransLang;
  },
  setOriText (state, newOriText) {
    state.oriText = newOriText;
  },
  setTransText (state, newTransText) {
    state.transText = newTransText;
  }
}

const actions = {
  setImageFilePath ({ commit }, newImageFilePath) {
    commit('setImageFilePath', newImageFilePath)
  },
  setOcrSpaceApiKey ({ commit }, newOcrSpaceApiKey) {
    commit('setOcrSpaceApiKey', newOcrSpaceApiKey)
  },
  setOriLang ({ commit }, newOriLang) {
    commit('setOriLang', newOriLang);
  },
  setTransLang ({ commit }, newTransLang) {
    commit('setTransLang', newTransLang);
  },
  setOriText ({ commit }, newOriText) {
    commit('setOriText', newOriText);
  },
  setTransText ({ commit }, newTransText) {
    commit('setTransText', newTransText);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
