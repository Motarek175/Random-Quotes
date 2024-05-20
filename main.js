let quote = [
  // ابو بكر رضي الله عنه
  "إن الله يعلم السر وأخفى، فاحذر أن تكون في جانب الله مخالفاً، وفي جانب الناس موافقاً .",
  "إذا فاتك خير فأدركه، وإن أدركك فاسبقه .",
  "رحم الله امرأ أعان أخاه بنفسه .",
  "إن أقواكم عندي الضعيف حتى آخذ له حقه، وإن أضعفكم عندي القوي حتى آخذ منه الحق .",
  //عمر بن الخطاب رضي الله عنه
  "إن الطمع فقر، وإن اليأس غنى، وإنه من ييأس مما في أيدي الناس استغنى عنهم .",
  "عليك بذكر الله؛ فإنه شفاء، وإياك وذكر الناس؛ فإنه داء .",
  "اللهم إني أعوذ بك من جَلَد الفاجر وعجز الثقة .",
  "إذا رأيتم الرجل يضيع من الصلاة فهو لغيرها من حقوق الله أضيع .",
  // عثمان بن عفان رضي الله عنه
  "كفى بالمرء عيباً أن يعيب الناس وهو فيه أكثر مما فيهم .",
  "إن الدنيا خلقت لكم وأنتم خلقتم للآخرة، فخذوا من دنياكم لآخرتكم .",
  "إن لكل شيء آفة، وإن آفة هذا الدين عيابون طعانون، يرونكم ما تحبون ويسرون ما تكرهون .",
  "أنتم إلى إمام فعال أحوج منكم إلى إمام قوال .",
  // علي بن ابي طالب رضي الله عنه
  "ما أضمر أحدٌ شيئاً إلا ظهر في فلتات لسانه وصفحات وجهه .",
  "السعادة ليست في الجمال، بل في جمال ما تراه .",
  "النفسُ تبكي على الدنيا وقد علمت أن السعادة فيها ترك ما فيها .",
  "الناس نيام فإذا ماتوا انتبهوا .",
];

let author = [
  "أبو بكر الصديق رضي الله عنه",
  "أبو بكر الصديق رضي الله عنه",
  "أبو بكر الصديق رضي الله عنه",
  "أبو بكر الصديق رضي الله عنه",

  "عمر بن الخطاب رضي الله عنه",
  "عمر بن الخطاب رضي الله عنه",
  "عمر بن الخطاب رضي الله عنه",
  "عمر بن الخطاب رضي الله عنه",

  "عثمان بن عفان رضي الله عنه",
  "عثمان بن عفان رضي الله عنه",
  "عثمان بن عفان رضي الله عنه",
  "عثمان بن عفان رضي الله عنه",

  "علي بن أبي طالب رضي الله عنه",
  "علي بن أبي طالب رضي الله عنه",
  "علي بن أبي طالب رضي الله عنه",
  "علي بن أبي طالب رضي الله عنه",
];

let quoteText = document.querySelector(".text p");
let quoteAuthor = document.querySelector(".author p");
let button = document.querySelector(".button");
let currentindex = 0;
let newindex = 0;
window.onload = () => {
  let randnum = Math.floor(Math.random() * quote.length);
  quoteText.innerHTML = quote[randnum];
  quoteText.style.cssText = " transform: scale(1);";
  quoteAuthor.innerHTML = `" ${author[randnum]} "`;
  quoteAuthor.style.cssText = " transform: scale(1);";
};

button.addEventListener("click", () => {
  quoteText.style.cssText = " transform: scale(0);";
  quoteAuthor.style.cssText = " transform: scale(0);";
  setTimeout(() => {
    let randnum = Math.floor(Math.random() * quote.length);
    currentindex = randnum;
    if (newindex === currentindex) {
      newindex = (newindex + 1) % quote.length;
    } else {
      newindex = currentindex;
    }
    quoteText.innerHTML = quote[newindex];
    quoteText.style.cssText = " transform: scale(1);";
    quoteAuthor.innerHTML = `" ${author[newindex]} "`;
    quoteAuthor.style.cssText = " transform: scale(1);";
  }, 500);
});
