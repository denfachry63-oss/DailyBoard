export function simpanData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function muatData(key, nilaiDefault = []) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : nilaiDefault;
}

export function simpanTema(mode) {
    localStorage.setItem("tema", mode);
}

export function muatTema() {
    return localStorage.getItem("tema");
}
