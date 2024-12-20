var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Αντίγραφο εντύπου άδειας οδήγησης λόγω απώλειας ή κλοπής",
      pageTitle: "Αντίγραφο εντύπου άδειας οδήγησης λόγω απώλειας ή κλοπής",
      infoTitle: "Πληροφορίες για την έκδοση αντίγραφου έντυπου άδειας οδήγησης λόγω απώλειας ή κλοπής",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να εκδόσετε αντίγραφο έντυπο άδειας οδήγησης σε περίπτωση που αυτό σας έχει κλαπεί ή το έχετε χάσει.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 5 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες μιας εργασίας, στα πλαίσια του μαθήματος Ηλεκτρονική Διακυβέρνηση, κατά τη διάρκεια των προπτυχιακών μας σπουδών στο τμήμα Εφαμοσμένης Πληροφορικής του Πανεπιστημίου Μακεδονίας. Η ομάδα μας αποτελείται από 2 φοιτητές:",
      and: "και",
      student1: "Σιδέρης Δημήτριος",
      student2: "Κομνηνάκη Ευγενία",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Issue of a Copy of a Driving Licence due to Loss or Theft",
      pageTitle: "Issue of a Copy of a Driving Licence due to Loss or Theft",
      infoTitle: "Information on the issue of a Copy of a Driving Licence due to Loss or Theft",
      subTitle1: "This questionnaire can help you issue a copy of a driver's license form in case it has been stolen or you have lost it.",
      subTitle2: "Completing the questionnaire should not take more than 5 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of a project, within the framework of the course e-Government, during our undergraduate studies at the Department of Applied Informatics of the University of Macedonia. Our team consists of 2 students:",
      and: "and",
      student1: "Sideris Dimitrios",
      student2: "Komninaki Evgenia",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();