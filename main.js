function mainProc() {
  /*-----------------------
     検索実行
   -----------------------*/
  // 検索文字列の取得
  const searchStr = document.querySelector("#search").value;
  const searchRegExp = new RegExp(searchStr, "");
  // ポケモンリストをロード
  const pokemons = loadPokemon();
  // 検索
  const searched = pokemons.filter((p, i) => searchRegExp.test(p));

  /*-----------------------
      検索結果の追加
   -----------------------*/
  // 結果のクリア
  const resultArea = document.querySelector("#resultList");
  resultArea.childNodes.forEach((e) => e.remove());
  for (s of searched) {
      // 結果エレメントの生成
      const result = document.createElement("li");
      result.textContent = s;
      // 結果の追加
    resultArea.appendChild(result);
  }
}

window.onload = () => {
  document.querySelector("#go").addEventListener("click", () => {
    mainProc();
  });
};
