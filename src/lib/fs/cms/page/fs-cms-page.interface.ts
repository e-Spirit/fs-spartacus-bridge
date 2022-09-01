export interface FsCmsPageInterface extends EntryBase {
  _id: string; // only in ZT
  _etag: any; // only in ZT
  uidType: string; // only in ZT
  uid: string;
  metaFormData: { [key: string]: FormData | null };
  formData?: { [key: string]: FormData | null };
  displayname?: string;
  previewId?: string; // only in FS-JSON
  page: Page;
  name: string;
  locale: Locale;
  fallbackIdentifiers?: string[];
}

export interface Page extends EntryBase {
  uidType: string; // only in ZT
  uid: string;
  template: Template | string;
  metaFormData: { [key: string]: FormData | null };
  formData: { [key: string]: FormData | null };
  previewId?: string; // only in FS-JSON
  children: Children[] | null;
  name: string;
}

export interface EntryBase {
  fsType: string;
  identifier: string;
  displayName?: string;
}

export interface Template extends EntryBase {
  name: string;
  uid: string;
  uidType?: string; // optional in FS-JSON
}

export interface Child extends EntryBase {
  name: string;
  identifier: string;
  template: Template;
  formData: { [key: string]: FormData };
  previewId?: string; // only in FS-JSON
  uid?: string;
}

export interface FormData {
  fsType: string;
  name: string;
  dapType?: string;
  value: string | boolean | number | Value | Value[] | null;
  previewId?: string;
}

export interface Children extends EntryBase {
  name: string;
  children: Child[] | null;
  uid?: string;
  previewId?: string;
}

export interface Locale {
  identifier: string;
  country: string;
  language: string;
}
export interface Value extends Partial<Child> {
  label?: string;
  url?: string;
  uidType?: string;
  name?: string;
  uid?: string;
  uuid?: string;
  mediaType?: string;
  fsType?: string;
  [k: string]: any;
}
