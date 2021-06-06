// ------------------------------
// Author: Neokazis Charalampos
// Author URI: NeoBabis.gr
// Version: 2.0
// Description: ARIA tab role
// ------------------------------

const nb_tab_groups_ids = document.querySelectorAll("[data-nb_tab_group_id]");
if (nb_tab_groups_ids) {
    nb_tab_groups_ids.forEach((tab_group_id) => {
        const nb_tabs = tab_group_id.querySelectorAll("[role='tab']");
        const nb_tab_content = document.querySelector(tab_group_id.dataset.nb_tab_group_id);
        let nb_mouse_event = tab_group_id.dataset.nb_mouse_event;
        if (!nb_mouse_event) nb_mouse_event = "click";

        if (nb_tabs && nb_tab_content) {
            nb_tabs.forEach((tab) => {
                tab.addEventListener(nb_mouse_event, () => {
                    // Change already activated tab content
                    // hide all tab contents
                    let all_tab_contents = nb_tab_content.querySelectorAll("[role='tabpanel']");
                    all_tab_contents.forEach((e) => {
                        e.setAttribute("hidden", true);
                    });
                    // open new tab content
                    let target_tab_content = document.querySelector("#" + tab.getAttribute("aria-controls"));
                    target_tab_content.removeAttribute("hidden");

                    // Change styling for active tab
                    let activated_tab = tab_group_id.querySelector("[aria-selected='true']");
                    if (activated_tab) activated_tab.setAttribute("aria-selected", false);
                    tab.setAttribute("aria-selected", true);
                });
            });
        }
    });
}
