function loadingInit() {
  window.onload = () => {
    const loading = document.querySelector(".loading");

    console.log(loading);

    setTimeout(() => {
      loading.classList.add("loading-disabled");
    }, 1200);
  };
}

export default loadingInit;
