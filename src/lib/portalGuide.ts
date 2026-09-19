export type PortalGuideKind = 'scheme';

export interface PortalGuideRequest {
  title: string;
  portalName: string;
  url: string;
  kind: PortalGuideKind;
}

export function openPortalWithGuide(request: PortalGuideRequest) {
  const detail = { ...request, openedAt: new Date().toISOString() };
  try { sessionStorage.setItem('udaan_portal_guide', JSON.stringify(detail)); } catch { /* storage can be unavailable */ }
  window.dispatchEvent(new CustomEvent('udaan:portal-guide', { detail }));
  window.open(request.url, '_blank', 'noopener,noreferrer');
}
