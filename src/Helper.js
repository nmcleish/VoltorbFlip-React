//    if level == 1:
//        level_1 = [(3, 1, 6), (0, 3, 6), (5, 0, 6), (2, 2, 6), (4, 1, 6)]
//        return level_1[randint(0, 4)]
//    # TODO Put in correct values for all the levels above 1
//    elif level == 2:
//        level_1 = [(1, 3, 7), (6, 0, 7), (3, 2, 7), (0, 4, 7), (5, 1, 7)]
//        return level_1[randint(0, 4)]
//    elif level == 3:
//        level_1 = [(2, 3, 8), (7, 0, 8), (4, 2, 8), (1, 4, 8), (6, 1, 8)]
//        return level_1[randint(0, 4)]
//    elif level == 4:
//        level_1 = [(3, 3, 8), (0, 5, 8), (8, 0, 10), (5, 2, 10), (2, 4, 10)]
//        return level_1[randint(0, 4)]
//    elif level == 5:
//        level_1 = [(7, 1, 10), (5, 3, 10), (1, 5, 10), (9, 0, 10), (6, 2, 10)]
//        return level_1[randint(0, 4)]
//    elif level == 6:
//        level_1 = [(3, 4, 10), (0, 6, 10), (8, 1, 10), (5, 3, 10), (2, 5, 10)]
//        return level_1[randint(0, 4)]
//    elif level == 7:
//        level_1 = [(7, 2, 10), (4, 4, 10), (1, 6, 13), (9, 1, 13), (6, 3, 10)]
//        return level_1[randint(0, 4)]
//    elif level == 8:
//        level_1 = [(0, 7, 10), (8, 2, 10), (5, 4, 10), (2, 6, 10), (7, 3, 10)]
//        return level_1[randint(0, 4)]

function calculateBoard(level) {
    const levelone = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const leveltwo = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const levelthree = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const levelfour = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const levelfive = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const levelsix = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const levelseven = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

const leveleight = [
    [3, 1, 6], 
    [0, 3, 6],
    [5, 0, 6], 
    [2, 2, 6], 
    [4, 1, 6]
];

    if (level === 1) {
        return levelone[Math.floor(Math.random() * levelone.length)];
    }
    else {
        return leveltwo[Math.floor(Math.random() * levelone.length)];
    }
}

export default calculateBoard;
  
