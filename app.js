module.exports = {
    getStringsPromise,
    getStringPromise
};

function getStringsPromise(numArrays) {
    if (numArrays[0].constructor !== Array) {
        throw new Error("getStringsPromise works only with 2dimensional array!/n Try 'getStringPromise' instead.");
    }
    return Promise.all(getPromises(numArrays));
}

function getStringPromise(numArray) {
    if (numArray[0].constructor === Array) {
        throw new Error("getStringsPromise works only with 1dimensional array!/n Try 'getStringsPromise' instead.");
    }
    return new Promise((resolve) => {
        resolve(alg(numArray));
    })
}

function getPromises(arrs) {
    let promises = [];
    for (let arr of arrs) {
        promises.push(new Promise((resolve) => {
                resolve(alg(arr));
        }))
    }
    return promises
}

function alg(ar) {
    let res = "";
	ar_len = ar.length;
	let count = 0;
	for (i = 0; i < ar_len; i++) {
        if (ar[i] === ar[i+1]-1 && ar[i+1] === ar[i+2]-1) {
			count++;
		}
		else {
			if(count === 0) {
				res += `${ar[i]},` 
			}
			else {
                res += `${ar[i-count]}-${ar[i+1]},`; 
                i++;
				count = 0;
			}
		}
	}
	return res.slice(0, -1);
}
