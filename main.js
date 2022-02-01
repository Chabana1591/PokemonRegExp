function mainProc() {
  /*-----------------------
     検索実行
   -----------------------*/
  // 検索文字列の取得
  const searchStr = document.querySelector("#search").value;
  // ポケモンリストをロード
  const pokemons = loadPokemon();
  // 検索
  const searched = pokemons.find((p, i) => p === searchStr);

  /*-----------------------
      検索結果の追加
   -----------------------*/
  // 結果のクリア
  const resultArea = document.querySelector("#resultArea");
  resultArea.childNodes.forEach((e) => e.remove());
  // 結果エレメントの生成
  const result = document.createElement("span");
  result.textContent = searched;
  // 結果の追加
  resultArea.appendChild(result);
}

window.onload = () => {
  document.querySelector("#go").addEventListener("click", () => {
    mainProc();
  });
};
