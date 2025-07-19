function bookInfo1() {
    document.getElementById('book1').style.display = 'flex'
    document.getElementById("author1").style.display = 'none';
    document.getElementById("suggestions1").style.display = 'none';
}

function authorInfo1() {
    document.getElementById('book1').style.display = 'none'
    document.getElementById("author1").style.display = 'flex';
    document.getElementById("suggestions1").style.display = 'none';
}

function authorBooks1() {
    document.getElementById('book1').style.display = 'none'
    document.getElementById("author1").style.display = 'none';
    document.getElementById("suggestions1").style.display = 'flex';
}

function bookInfo2() {
    document.getElementById('book2').style.display = 'flex'
    document.getElementById("author2").style.display = 'none';
    document.getElementById("suggestions2").style.display = 'none';
}

function authorInfo2() {
    document.getElementById('book2').style.display = 'none'
    document.getElementById("author2").style.display = 'flex';
    document.getElementById("suggestions2").style.display = 'none';
}

function authorBooks2() {
    document.getElementById('book2').style.display = 'none'
    document.getElementById("author2").style.display = 'none';
    document.getElementById("suggestions2").style.display = 'flex';
}

function bookInfo3() {
    document.getElementById('book3').style.display = 'flex'
    document.getElementById("author3").style.display = 'none';
    document.getElementById("suggestions3").style.display = 'none';
}

function authorInfo3() {
    document.getElementById('book3').style.display = 'none'
    document.getElementById("author3").style.display = 'flex';
    document.getElementById("suggestions3").style.display = 'none';
}

function authorBooks3() {
    document.getElementById('book3').style.display = 'none'
    document.getElementById("author3").style.display = 'none';
    document.getElementById("suggestions3").style.display = 'flex';
}

function showGenres() {
    document.getElementById('genres').style.display = 'block'
}

function showAuthors() {
    document.getElementById('authors').style.display = 'block'
}

function showRecommendation() {
    document.getElementById('recommendation').style.display = 'block'
}

function toggleNav() {
    document.querySelector('.nav-items').classList.toggle('hide-nav');
}

function showIndexRef() {
    document.getElementById("indexRefList").style.display = 'block';
}

function showLibraryRef() {
    document.getElementById('libraryRefList').style.display = 'block';
}

function showInspRef() {
    document.getElementById('inspRefList').style.display = 'block';
}

function showQuizRef() {
    document.getElementById('quizRefList').style.display = 'block';
}

function showBookRef() {
    document.getElementById('bookRefList').style.display = 'block';
}