<script>
export default {
  name: "ContactsList",
  functional: true,
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },

  render(h, { props, data }) {
    const getLiContent = ({ href, text, icon }) => {
      const Icon = h("b-icon", {
        props: { icon },
      });

      const LinkWrap = h(
        "a",
        {
          attrs: { href },
        },
        [Icon, text]
      );

      return href ? [LinkWrap] : [Icon, text];
    };

    const ContactsItems = props.contacts.map((contact) =>
      h(
        "li",
        {
          staticClass:
            "contacts-list__item hover:underline font-medium cursor-pointer",
        },
        getLiContent(contact)
      )
    );

    return h(
      "ul",
      {
        staticClass: "contacts-list flex flex-row flex-wrap",
        class: [data.staticClass, data.class],
      },
      ContactsItems
    );
  },
};
</script>

<style lang="scss">
.contacts-list {
  gap: 0.5rem 1rem;

  &__item > a {
    color: currentColor;
  }

  &__item,
  &__item a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
