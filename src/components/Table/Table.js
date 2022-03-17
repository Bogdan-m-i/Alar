import Fetch from '@/components/Fetch/Fetch';

export default class Table {
  constructor() {
    // Elements
    this.table = document.querySelector('.table');
    if (!this.table) return;
    this.body = this.table.querySelector('.table__body');

    // Data
    this.data = [];

    // Bind
    this.clickHandlerBind = this.clickHandler.bind(this);
  }

  async init() {
    if (!this.table) return;

    this.table.addEventListener('click', this.clickHandlerBind);
    this.data = await Fetch.getData('/assets/json/contacts.json');

    this.data.forEach((contact) => { this.body.insertAdjacentHTML('beforeend', Table.getRowTemplate(contact)); });
  }

  clickHandler(e) {
    const form = e.target.closest('form.table__row');
    const btnSave = form.querySelector('[data-role="save"]');
    const btnEdit = form.querySelector('[data-role="edit"]');
    const btnDelete = form.querySelector('[data-role="delete"]');

    // Edit action
    if (btnEdit?.contains(e.target)) {
      e.preventDefault();

      btnEdit.style.display = 'none';
      btnSave.style.display = null;
      Table.inputsEnable(form);
    } else

    // Save action
    if (btnSave?.contains(e.target)) {
      e.preventDefault();

      if (form.checkValidity()) {
        const formData = new FormData(form);
        const data = JSON.stringify(Object.fromEntries(formData));
        form.removeEventListener('input', Table.checkInputStatus);

        // If new contact form
        if (form.id === 'new-contact') {
          const newContact = Object.fromEntries(formData);
          newContact.id = Math.floor(Math.random() * 666);
          this.body.insertAdjacentHTML('beforeend', Table.getRowTemplate(newContact));
          Fetch.postData('contacts', data);
          form.reset();
          return;
        }

        Fetch.putData(`contacts/${formData.get('id')}`, data);

        Table.inputsDisable(form);

        btnEdit.style.display = null;
        btnSave.style.display = 'none';
      } else {
        const inputs = [...form.querySelectorAll('input:invalid')];
        inputs.forEach((el) => { Table.checkInputStatus(el); });

        form.addEventListener('input', Table.checkInputStatus);
      }
    } else

    // Delete action
    if (btnDelete?.contains(e.target)) {
      e.preventDefault();

      const formData = new FormData(form);
      Fetch.deleteData(`contacts/${formData.get('id')}`);
      form.remove();
    }
  }

  static checkInputStatus(e) {
    const input = e.target || e;
    const wrap = input.closest('.input');
    const error = wrap.querySelector('.input__error');

    if (input.checkValidity()) {
      wrap.classList.remove('invalid');
      return;
    }

    wrap.classList.add('invalid');

    if (input.validity.patternMismatch) {
      error.innerText = 'Bad format';
    } else
    if (input.validity.valueMissing) {
      error.innerText = 'Enter value';
    } else
    if (input.validity.tooShort) {
      error.innerText = 'Value too short';
    }
  }

  static inputsDisable(parent) {
    const inputs = [...parent.querySelectorAll('input:not([type="hidden"])')];
    inputs.forEach((el) => { el.disabled = true; });
  }

  static inputsEnable(parent) {
    const inputs = [...parent.querySelectorAll('input')];
    inputs.forEach((el) => { el.disabled = false; });
  }

  static getRowTemplate(contact) {
    return `
      <form class="table__row">
        <div class="table__col">
          <div class="input">
            <input name="name" value="${contact.name}" required="" disabled="">
            <div class="input__error"></div>
          </div>
        </div>
        <div class="table__col">
          <div class="input">
            <input name="phone" value="${contact.phone}" pattern="^[+]{0,1}[0-9\\-]+$" minlength="6" maxlength="16" required="" disabled="">
            <div class="input__error"></div>
          </div>
        </div>
        <div class="table__col">
          <input type="hidden" value="${contact.id}" name="id">
          <button class="table__row-btn btn" data-role="edit">
            <svg class="svg-icon icon-edit">
              <use xlink:href="/assets/img/icons/sprite.svg#edit"></use>
            </svg>
          </button>
          <button class="table__row-btn btn btn_success" data-role="save" type="submit" style="display:none;">
            <svg class="svg-icon icon-edit">
              <use xlink:href="/assets/img/icons/sprite.svg#save"></use>
            </svg>
          </button>
          <button class="table__row-btn btn btn_danger" data-role="delete">
            <svg class="svg-icon icon-edit">
              <use xlink:href="/assets/img/icons/sprite.svg#delete"></use>
            </svg>
          </button>
        </div>
      </form>
    `;
  }

  destroy() {
    this.table.removeEventListener('click', this.clickHandlerBind);
  }
}
