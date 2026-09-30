/* @ds-bundle: {"format":4,"namespace":"BurgerMaxDesignSystem_96df5c","components":[{"name":"MenuCard","sourcePath":"components/cards/MenuCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"PhotoSlot","sourcePath":"components/core/PhotoSlot.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"WhatsAppFloat","sourcePath":"components/feedback/WhatsAppFloat.jsx"},{"name":"CategorySelect","sourcePath":"components/forms/CategorySelect.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/cards/MenuCard.jsx":"2be85dc751e1","components/core/Button.jsx":"6cdccce06cfa","components/core/PhotoSlot.jsx":"b0dd824ab0cf","components/core/Pill.jsx":"0ebc26bd7c4d","components/feedback/WhatsAppFloat.jsx":"e953b7ac1260","components/forms/CategorySelect.jsx":"493bab269ad3","components/navigation/NavBar.jsx":"13bc33f500ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BurgerMaxDesignSystem_96df5c = window.BurgerMaxDesignSystem_96df5c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const VARIANT_STYLES = {
  fire: {
    background: 'var(--fire-gradient)',
    color: '#fff',
    boxShadow: 'var(--shadow-fire)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--accent-orange)',
    border: '2px solid var(--accent-orange)'
  }
};
const SIZE_STYLES = {
  sm: {
    padding: '6px 16px',
    fontSize: '11px'
  },
  md: {
    padding: '10px 24px',
    fontSize: '12px'
  },
  lg: {
    padding: '14px 32px',
    fontSize: '14px'
  }
};
function Button({
  children,
  variant = 'fire',
  size = 'md',
  icon,
  as = 'button',
  href,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'transform var(--duration-fast) ease, filter var(--duration-fast) ease, background-color var(--duration-fast) ease, color var(--duration-fast) ease',
    ...VARIANT_STYLES[variant],
    ...SIZE_STYLES[size],
    ...style
  };
  const Tag = as === 'a' ? 'a' : 'button';
  return React.createElement(Tag, {
    style: base,
    href,
    ...rest
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoSlot.jsx
try { (() => {
function PhotoSlot({
  label = 'Foto de producto',
  width = '100%',
  aspect = '1 / 1'
}) {
  return React.createElement('div', {
    style: {
      width,
      aspectRatio: aspect,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      borderRadius: 'var(--radius-md)',
      border: '2px dashed rgba(244,124,20,.45)',
      background: 'repeating-linear-gradient(45deg, rgba(244,124,20,.08) 0 10px, transparent 10px 20px), var(--surface-card)',
      color: 'var(--bm-deep)',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      textAlign: 'center',
      padding: '12px'
    }
  }, React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M4 8h3l1.5-2h7L17 8h3v11H4zM12 17a3.5 3.5 0 100-7 3.5 3.5 0 000 7z'
  })), label);
}
Object.assign(__ds_scope, { PhotoSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoSlot.jsx", error: String((e && e.message) || e) }); }

// components/cards/MenuCard.jsx
try { (() => {
function MenuCard({
  image,
  title,
  note,
  category
}) {
  return React.createElement('article', {
    'data-cat': category,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      fontFamily: 'var(--font-sans)'
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: '',
    style: {
      aspectRatio: '1 / 1',
      width: '100%',
      borderRadius: 'var(--radius-md)',
      objectFit: 'cover'
    }
  }) : React.createElement(__ds_scope.PhotoSlot, null), React.createElement('h3', {
    style: {
      marginTop: '14px',
      fontWeight: 700,
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)',
      fontSize: '16px'
    }
  }, title), note && React.createElement('p', {
    style: {
      marginTop: '4px',
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, note), React.createElement(__ds_scope.Button, {
    variant: 'fire',
    size: 'sm',
    as: 'a',
    href: 'https://wa.link/glqbbq',
    style: {
      marginTop: '14px'
    }
  }, 'Pedir'));
}
Object.assign(__ds_scope, { MenuCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MenuCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  children,
  tone = 'outline'
}) {
  const style = tone === 'outline' ? {
    border: '2px solid var(--border-subtle)',
    color: 'var(--text-primary)',
    background: 'transparent'
  } : {
    background: 'var(--surface-pill)',
    color: 'var(--text-heading)'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      fontFamily: 'var(--font-sans)',
      fontWeight: tone === 'outline' ? 700 : 600,
      fontSize: tone === 'outline' ? '13px' : '12px',
      padding: tone === 'outline' ? '6px 16px' : '6px 14px',
      borderRadius: 'var(--radius-full)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/WhatsAppFloat.jsx
try { (() => {
function WhatsAppFloat({
  href = 'https://wa.link/glqbbq'
}) {
  return React.createElement('a', {
    href,
    target: '_blank',
    rel: 'noopener',
    'aria-label': 'Pedir por WhatsApp',
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '56px',
      height: '56px',
      borderRadius: '999px',
      background: 'var(--bm-whatsapp)',
      color: '#fff',
      boxShadow: 'var(--shadow-float)',
      textDecoration: 'none'
    }
  }, React.createElement('svg', {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, React.createElement('path', {
    d: 'M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z'
  })));
}
Object.assign(__ds_scope, { WhatsAppFloat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/WhatsAppFloat.jsx", error: String((e && e.message) || e) }); }

// components/forms/CategorySelect.jsx
try { (() => {
function CategorySelect({
  value = 'todo',
  onChange,
  options = [{
    value: 'todo',
    label: 'Todo'
  }, {
    value: 'hamburguesas',
    label: 'Hamburguesas'
  }, {
    value: 'combos',
    label: 'Combos'
  }, {
    value: 'pollo',
    label: 'Pollo'
  }, {
    value: 'bebidas',
    label: 'Bebidas'
  }, {
    value: 'acompanar',
    label: 'Para acompañar'
  }]
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, 'Categoría', React.createElement('select', {
    value,
    onChange,
    style: {
      marginTop: '4px',
      width: '190px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid color-mix(in oklab, var(--accent-orange) 50%, transparent)',
      background: '#fff',
      padding: '8px 12px',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--accent-orange)'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { CategorySelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CategorySelect.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logo,
  links = ['Carta', 'Ubicación', 'Contacto']
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      padding: '0 24px',
      background: 'rgba(255,255,255,.95)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('img', {
    src: logo,
    alt: 'BurgerMax',
    style: {
      height: '40px',
      width: 'auto'
    }
  }), React.createElement('ul', {
    style: {
      display: 'flex',
      gap: '28px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontWeight: 600,
      fontSize: '14px'
    }
  }, links.map(l => React.createElement('li', {
    key: l
  }, l))), React.createElement(__ds_scope.Button, {
    variant: 'fire',
    size: 'sm'
  }, 'Pedir'));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MenuCard = __ds_scope.MenuCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PhotoSlot = __ds_scope.PhotoSlot;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.WhatsAppFloat = __ds_scope.WhatsAppFloat;

__ds_ns.CategorySelect = __ds_scope.CategorySelect;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
