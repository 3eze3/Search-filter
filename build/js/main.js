"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function filter() {
    const $id_input = document.getElementById("search_input");
    $id_input === null || $id_input === void 0 ? void 0 : $id_input.addEventListener("input", () => {
        let text = $id_input.value.trim().toLowerCase();
        if (text === "") {
            const allRows = document.querySelectorAll(".table__rowB");
            allRows.forEach(row => row.classList.remove("filter"));
            return;
        }
        const datas = Array.from(document.querySelectorAll(".table__dataB"));
        datas.forEach(item => {
            var _a, _b, _c, _d, _e, _f;
            if (item.parentElement) {
                const idText = (_b = (_a = item.parentElement
                    .querySelector(".table__data--id")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.toString().trim().toLowerCase();
                const nameText = (_d = (_c = item.parentElement
                    .querySelector(".table__data--name")) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim().toLowerCase();
                const codeCountryText = (_f = (_e = item.parentElement
                    .querySelector(".table__data--country")) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.trim().toLowerCase();
                const matches = (idText === null || idText === void 0 ? void 0 : idText.includes(text)) ||
                    (nameText === null || nameText === void 0 ? void 0 : nameText.includes(text)) ||
                    (codeCountryText === null || codeCountryText === void 0 ? void 0 : codeCountryText.includes(text));
                matches
                    ? item.parentElement.classList.remove("filter")
                    : item.parentElement.classList.add("filter");
            }
        });
    });
}
filter();
function getDataApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
        const options = {
            method: "Get",
            headers: {
                "X-RapidAPI-Key": "9d86603351msh7eae6101ad2b15cp138ed3jsn0b2e93f423e0",
                "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
        };
        try {
            const response = yield fetch(url, options);
            const data = yield response.json();
            return data.data;
        }
        catch (error) {
            return error;
        }
    });
}
function printDataInTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const $table = document.querySelector(".table__body");
        const $fragment = document.createDocumentFragment();
        const data = yield getDataApi();
        const especificData = data.map((obj) => ({
            id: obj.id,
            name: obj.name,
            countryCode: obj.countryCode,
        }));
        especificData.forEach((element) => {
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
        });
        $table === null || $table === void 0 ? void 0 : $table.appendChild($fragment);
    });
}
printDataInTable();
