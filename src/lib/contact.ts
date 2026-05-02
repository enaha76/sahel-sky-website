export const CONTACT_OPEN_EVENT = "sahelsky:contact-open";

export type ContactOpenDetail = {
  subject?: string;
};

export const openContactModal = (detail: ContactOpenDetail = {}) => {
  window.dispatchEvent(
    new CustomEvent<ContactOpenDetail>(CONTACT_OPEN_EVENT, { detail })
  );
};
