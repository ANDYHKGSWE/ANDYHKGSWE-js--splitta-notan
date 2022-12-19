const calculate = () => {
    let sum = document.querySelector('#sum').value;
    let numberOfFriends = document.querySelector('#numberOfFriends').value;
    let tip = document.querySelector('#tip').value;

    sum = Number(sum);
    numberOfFriends = Number(numberOfFriends);
    tip = Number(tip);

    tip = Math.floor((sum * tip));
    total = (sum + tip) / numberOfFriends;

    
    document.querySelector('#result').innerHTML = total + ' kr';
    let showSum = document.querySelector('#showSum');
    showSum.classList.toggle('hide');
}