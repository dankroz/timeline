module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/arca_db": {
        target: "http://localhost:3000",
      },
    }
  }
}