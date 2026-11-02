
const intro = document.getElementById('intro');
const mainSite = document.getElementById('main-site');
const steps = document.querySelectorAll('.step');

function showStep(stepId) {
    steps.forEach(step => {
        step.classList.add('hidden');
    });

    document.getElementById(stepId)
        .classList.remove('hidden');
}

// وارد کردن سن
document.getElementById('age-form')
    .addEventListener('submit', event => {
        event.preventDefault();
        showStep('step-lie');
    });

// جواب آره به دروغ گفتن
document.getElementById('lie-yes')
    .addEventListener('click', () => {
        showStep('step-final');
    });

// جواب نه به دروغ گفتن
document.getElementById('lie-no')
    .addEventListener('click', () => {
        showStep('step-sure');
    });

// جواب سوال مطمئنی؟
document.getElementById('sure-yes')
    .addEventListener('click', () => {
        showStep('step-final');
    });

document.getElementById('sure-no')
    .addEventListener('click', () => {
        showStep('step-final');
    });

// رفتن به صفحه تولد
document.getElementById('enter-site')
    .addEventListener('click', () => {
        intro.classList.add('hidden');
        mainSite.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

// باز کردن هدیه زنجبیل
const giftButton =
    document.getElementById('gift-button');

const giftContent =
    document.getElementById('gift-content');

giftButton.addEventListener('click', () => {
    const isNowVisible =
        giftContent.classList.contains('hidden');

    giftContent.classList.toggle('hidden');

    giftButton.setAttribute(
        'aria-expanded', String(isNowVisible)
    );
});
