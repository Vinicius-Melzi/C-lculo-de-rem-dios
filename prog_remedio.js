/* O custo da cápsula será calculado por centímetro cúbico de volume interno útil (R$/cm³).
Volume do cilindro (cm³): Vc=π.r²
. Hcil, onde: r = raio da base [cm], Hcil = altura do cilindro [cm]

Volume da esfera (cm³): Vc= 4.(⅓) .π.r³
, onde: r = raio da esfera[cm]

Volume total da cápsula (cm³): Vcil + Vesfera
Preço unitário da pó por cm³ é R$ 0.005 (meio centavo)

Custo_total (R$)=Vcapsula (cm³) * preço_unitário (R$/cm³)
Volume tanque retangular = L *C * H, onde: L = largura (m), C = comprimento (m) e H = altura (m)

Preço unitário do remédio deve ser calculado sabendo que: 1 m³ = (100 cm)³ = 100 = 1.000.000 cm³,
logo: o preço é 1.000.000 * 0.005, ou seja, R$ 5.000,00 (cinco mil) para 1 m³ de tanque.
Custo_total (R$)=Vtanque (m³) * preço_remédio_por_m³ (R$/m³)
*/

let resposta = document.getElementById('resposta')

function calcularVolumeCil(raio, alturaCil){

    return (Math.PI * raio * raio) * alturaCil
}


function calcularVolumeEsf(raioEsf){

    return (4 * 1 / 3) * (Math.PI * raioEsf * raioEsf * raioEsf)
}


function calcularVolumeTotalCap(vCil, vEsf){

    return vCil + vEsf
}


function calcularCustoTotalCap(vCap){
    const precoUniPo = 0.005

    return vCap * precoUniPo
}


function calcularVolumeTan(largura, comprimento, alturaTan){

    return largura * comprimento * alturaTan
}

function calcularCustoTotalPre(vTan, precoRemedioMetro){

    return vTan * precoRemedioMetro
}


function principal(){

    let raio = Number(document.getElementById('raio').value)
    let raioEsf = Number(document.getElementById('raioEsf').value)
    let alturaCil = Number(document.getElementById('alturaCil').value)

    let vCil = calcularVolumeCil(raio, alturaCil)
    let vEsf = calcularVolumeEsf(raioEsf)
    let vCap = calcularVolumeTotalCap(vCil, vEsf)

    let precoCapTotal = calcularCustoTotalCap(vCap)


    let alturaTan = Number(document.getElementById('alturaTan').value)
    let largura = Number(document.getElementById('largura').value)
    let comprimento = Number(document.getElementById('Comprimento').value)
    let precoRemedioMetro = 5.000
    let vTan = calcularVolumeTan(largura, comprimento, alturaTan)

    let precoPreTotal = calcularCustoTotalPre(vTan, precoRemedioMetro)


    let tipo = document.getElementById('tipo').value

resposta.innerHTML = ``

    if(tipo === 'cápsula'){
        vCap = calcularVolumeTotalCap(vCil, vEsf)
        console.log(`O volume total da cápsula é: ${vCap.toFixed(2)} cm³`)
        resposta.innerHTML += `O volume total da cápsula é: ${vCap.toFixed(2)} cm³ <br>`
        let precoCapTotal = calcularCustoTotalCap(vCap)
        console.log(`O preço total da capsula por cm³ é: R$ ${precoCapTotal.toFixed(2)} `)
        resposta.innerHTML += `O preço total da capsula por cm³ é: R$ ${precoCapTotal.toFixed(2)} <br>`
    }else if(tipo === 'tanque'){
        vTan = calcularVolumeTan(largura, comprimento, alturaTan)
        console.log(`O volume total do tanque é: ${vTan.toFixed(2)} m³`)
        resposta.innerHTML += `O volume total do tanque é: ${vTan.toFixed(2)} m³ <br>`
        precoPreTotal = calcularCustoTotalPre(vTan, precoRemedioMetro)
        console.log(`O preço total do unitário do rémedio por m³ é: R$ ${precoPreTotal.toFixed(2)} `)
        resposta.innerHTML += `O preço total do unitário do rémedio por m³ é: R$ ${precoPreTotal.toFixed(2)} <br>`
    }
}

