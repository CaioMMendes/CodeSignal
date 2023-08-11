

const grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
[4, 6, 5, 8, 7, 9, 3, 2, 1],
[7, 9, 8, 2, 1, 3, 6, 5, 4],
[9, 2, 1, 4, 3, 5, 8, 7, 6],
[3, 5, 4, 7, 6, 8, 2, 1, 9],
[6, 8, 7, 1, 9, 2, 5, 4, 3],
[5, 7, 6, 9, 8, 1, 4, 3, 2],
[2, 4, 3, 6, 5, 7, 1, 9, 8],
[8, 1, 9, 3, 2, 4, 7, 6, 5]]

function solution(grid) {
    console.log(grid[0].length)
    let error = 0

    //verificando linhas
    grid.map((array) => {
        const set = new Set(array)
        if (set.size !== 9) {
            error++
        }
    })

    //verificando colunas
    for (let i = 0; grid.length > i; i++) {
        let coluna = []
        for (let j = 0; grid.length > j; j++) {
            coluna.push(grid[j][i])
        }
        const set = new Set(coluna)
        if (set.size !== 9) {
            error++
        }
    }



    for (let i = 0; grid.length > i; i += 3) {


        for (let m = 0; 3 > m; m++) {



            let coluna = []
            for (let j = 0; 3 > j; j++) {
                for (let k = 0; 3 > k; k++) {
                    coluna.push(grid[j + i][k + (m * 3)])
                }
            }
            const set = new Set(coluna)
            if (set.size !== 9) {
                error++
            }




        }


    }








    return error === 0 ? true : false

}


console.log(solution(grid))

