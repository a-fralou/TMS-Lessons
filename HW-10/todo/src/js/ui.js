export const createToDoItem = ({ title, id, isDone, date }) => {
  return `<li
  class="list-group-item d-flex justify-content-between align-items-center" id="test"
>
  <div class="item-todo">
    <input
      class="form-check-input me-1"
      type="checkbox"
      id="${id}"
      ${isDone && 'checked="true"'}
    />
    <label
      class="form-check-label stretched-link"
      for="${id}"
      >${title}</label
    >
  </div>

  <div class="d-flex flex-column">
    <button data-id=${id} type="button" class="btn-delete btn btn-danger btn-sm mb-2"></button>
    <span class="badge bg-secondary">${date}</span>
  </div>
</li>`;
};
