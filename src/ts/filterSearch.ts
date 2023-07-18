function filter() {
  const $id_input: HTMLInputElement = document.getElementById(
    "search_input"
  ) as HTMLInputElement;

  $id_input?.addEventListener("input", () => {
    let text = $id_input.value.trim().toLowerCase();
    if (text === "") {
      const allRows = document.querySelectorAll(".table__rowB");
      allRows.forEach(row => row.classList.remove("filter"));
      return;
    }
    const datas = Array.from(document.querySelectorAll(".table__dataB"));

    datas.forEach(item => {
      if (item.parentElement) {
        const idText = item.parentElement
          .querySelector(".table__data--id")
          ?.textContent?.toString()
          .trim()
          .toLowerCase();
        const nameText = item.parentElement
          .querySelector(".table__data--name")
          ?.textContent?.trim()
          .toLowerCase();
        const codeCountryText = item.parentElement
          .querySelector(".table__data--country")
          ?.textContent?.trim()
          .toLowerCase();

        const matches =
          idText?.includes(text) ||
          nameText?.includes(text) ||
          codeCountryText?.includes(text);

        matches
          ? item.parentElement.classList.remove("filter")
          : item.parentElement.classList.add("filter");
      }
    });
  });
}

filter();
