async function printDataInTable() {
  const $table = document.querySelector(".table__body");
  const $fragment = document.createDocumentFragment();
  const data = await getDataApi();
  const especificData = data.map(
    (obj: { id: number; name: string; countryCode: string }) => ({
      id: obj.id,
      name: obj.name,
      countryCode: obj.countryCode,
    })
  );
  especificData.forEach(
    (element: { id: string; name: string; countryCode: string }) => {
      const $tr = document.createElement("tr");
      const $tdId = document.createElement("td");
      const $tdName = document.createElement("td");
      const $tdCounty = document.createElement("td");
      $tdId.className = "table__dataB table__data--id";
      $tdName.className = "table__dataB table__data--name";
      $tdCounty.className = "table__dataB table__data--country";
      $tr.className = "table__rowB";
      $tdId.textContent = element.id;
      $tdName.textContent = element.name;
      $tdCounty.textContent = element.countryCode;
      $tr.appendChild($tdId);
      $tr.appendChild($tdName);
      $tr.appendChild($tdCounty);

      $fragment.appendChild($tr);
    }
  );
  $table?.appendChild($fragment);
}
printDataInTable();
