function getRupiah(value) {
    value = String(value)
    ribuan = value.length % 3
    return `Rp ${value.slice(0, ribuan)}.${value.slice(ribuan)},00`
}

let a = getRupiah(18000)
console.log(a);

module.exports = getRupiah
