/*
5. Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida menos el 5% de deducciones por
impuestos. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado;
*/ 
const calcularNeto = (salBase, comi, cant) => {
    const neto = (salBase + (comi * cant))
    const bruto = neto - ((neto * 5) / 100)
    return bruto
}

console.log(calcularNeto(3500000,1500000,3))