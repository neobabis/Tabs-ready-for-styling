// ------------------------------
// Author: Neokazis Charalampos
// Author URI: NeoBabis.gr
// Version: 1.0
// Description: Tutorial Tabs
// ------------------------------

const nb_tab_group_list = document.querySelectorAll("[data-nb_tab_group_list]");
nb_tab_group_list.forEach((spesific_tab_group) => {
    const nb_tab_content = document.querySelector(spesific_tab_group.dataset.nb_tab_group_list);
    const nb_tabs = spesific_tab_group.querySelectorAll("[data-nb_tab_target]");

    if (nb_tabs) {
        nb_tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                // Change already acrivated tab content
                let target_tab_content = document.querySelector(tab.dataset.nb_tab_target);
                let activated_tab_content = nb_tab_content.querySelector(".active[data-nb_tab_content]");
                // close previous active content
                if (activated_tab_content) activated_tab_content.classList.remove("active");
                // open new tab content
                target_tab_content.classList.add("active");

                // Change styling for active tab
                let activated_tab = spesific_tab_group.querySelector(".active[data-nb_tab_target]");
                if (activated_tab) activated_tab.classList.remove("active");
                tab.classList.add("active");
            });
        });
    }
});
