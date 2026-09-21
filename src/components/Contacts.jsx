import './Contacts.css'

export default function Contacts({ contacts }) {
  return (
    <section className="section contacts" id="contacts">
      <h2 className="section__title">
        <span className="section__index">04.</span> Контакты
      </h2>

      <p className="contacts__note">
        Здесь только публичная информация — ни телефона, ни домашнего адреса. 🙂
      </p>

      <div className="contacts__grid">
        {contacts.map((contact) => {
          const content = (
            <>
              <span className="contacts__icon" aria-hidden="true">
                {contact.icon}
              </span>
              <span className="contacts__label">{contact.label}</span>
              <span className="contacts__value">{contact.value}</span>
            </>
          )

          return contact.href ? (
            <a
              key={contact.id}
              className="contacts__card contacts__card--link"
              href={contact.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {content}
            </a>
          ) : (
            <div key={contact.id} className="contacts__card">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
