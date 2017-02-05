
var shuffle = function(array)  {
    var len = array.length
    for(var i = 0; i < len - 1; i++) {
        var temp = array[i]
        var index = Math.floor(Math.random() * (len - i) + i)
        array[i] = array[index]
        array[index] = temp
    }
}

var randomArray09 = function(len, num) {
    var l = []
    for(var i = 0; i < num; i ++) {
        l.push(9)
    }
    while(l.length < len) {
        l.push(0)
    }
    shuffle(l)
    return l
}

var randomSquare09 = function(x, y, num) {
    var l = []
    var len = x * y
    var array = randomArray09(len, num)
    for(var i = 0; i < x; i++) {
        var a = array.slice(i * y, (i + 1) * y )
        l.push(a)
    }
    return l
}

var clonedSquare = function(array) {
    var s = []
    for (var i = 0; i < array.length; i++) {
        var line = []
        for (var j = 0; j < array[i].length; j++) {
            line.push(array[i][j])
        }
        s.push(line)
    }
    return s
}

/*
 array ��һ���������ˡ�ֻ������ 0 9 �� array���� array��
 ����һ����ǹ��� array
 ** ע��, ʹ��һ�����������洢���, ��Ҫֱ���޸�������

 ��������, ���� array
 [
 [0, 9, 0, 0],
 [0, 0, 9, 0],
 [9, 0, 9, 0],
 [0, 9, 0, 0],
 ]

 ���Ǳ�Ǻ�Ľ��
 [
 [1, 9, 2, 1],
 [2, 4, 9, 2],
 [9, 4, 9, 2],
 [2, 9, 2, 1],
 ]

 ������, 0 �ᱻ����Ϊ���� 8 ��Ԫ���� 9 ������
 */
var markedSquare = function(array) {
    var result = clonedSquare(array)
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array[i].length; j++) {
            if (array[i][j] == 0) {
                countNines(result, i, j)
            }
        }
    }
    return result
}

var countNines = function(result, i, j) {
    for(var a = i - 1; a <= i + 1; a++) {
        for(var b = j - 1; b <= j + 1; b++) {
            if (a < 0 || a >= result.length) {
                continue
            }
            if (b < 0 || b >= result[i].length) {
                continue
            }
            if (result[a][b] == 9) {
                result[i][j]++
            }
        }
    }
}

var area = function(x, y, num) {
    var a = randomSquare09(x, y, num)
    return markedSquare(a)
}
