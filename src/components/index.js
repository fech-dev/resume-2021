import Vue from "vue";
import ContactsList from "@/components/ContactsList";
import SectionContentCard from "@/components/SectionContentCard";

[ContactsList, SectionContentCard].forEach((component) => {
  Vue.component(component.name, component);
});
