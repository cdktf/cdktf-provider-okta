# `samlApp` Submodule <a name="`samlApp` Submodule" id="@cdktf/provider-okta.samlApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlApp <a name="SamlApp" id="@cdktf/provider-okta.samlApp.SamlApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_app okta_saml_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  acs_endpoints: typing.List[str] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  assertion_signed: typing.Union[bool, IResolvable] = None,
  attribute_statements: typing.Union[IResolvable, typing.List[SamlAppAttributeStatements]] = None,
  audience: str = None,
  authentication_policy: str = None,
  authn_context_class_ref: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  default_relay_state: str = None,
  destination: str = None,
  digest_algorithm: str = None,
  enduser_note: str = None,
  groups: typing.List[str] = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  honor_force_authn: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idp_issuer: str = None,
  implicit_assignment: typing.Union[bool, IResolvable] = None,
  inline_hook_id: str = None,
  key_name: str = None,
  key_years_valid: typing.Union[int, float] = None,
  logo: str = None,
  preconfigured_app: str = None,
  recipient: str = None,
  request_compressed: typing.Union[bool, IResolvable] = None,
  response_signed: typing.Union[bool, IResolvable] = None,
  saml_version: str = None,
  signature_algorithm: str = None,
  single_logout_certificate: str = None,
  single_logout_issuer: str = None,
  single_logout_url: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  sp_issuer: str = None,
  sso_url: str = None,
  status: str = None,
  subject_name_id_format: str = None,
  subject_name_id_template: str = None,
  timeouts: SamlAppTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[SamlAppUsers]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.assertionSigned">assertion_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.attributeStatements">attribute_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.audience">audience</a></code> | <code>str</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.defaultRelayState">default_relay_state</a></code> | <code>str</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.honorForceAuthn">honor_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.idpIssuer">idp_issuer</a></code> | <code>str</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.inlineHookId">inline_hook_id</a></code> | <code>str</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyYearsValid">key_years_valid</a></code> | <code>typing.Union[int, float]</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.recipient">recipient</a></code> | <code>str</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.responseSigned">response_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.samlVersion">saml_version</a></code> | <code>str</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.spIssuer">sp_issuer</a></code> | <code>str</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.ssoUrl">sso_url</a></code> | <code>str</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]</code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#label SamlApp#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `acs_endpoints`<sup>Optional</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.acsEndpoints"></a>

- *Type:* typing.List[str]

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#admin_note SamlApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_links_json SamlApp#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appSettingsJson"></a>

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `assertion_signed`<sup>Optional</sup> <a name="assertion_signed" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.assertionSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `attribute_statements`<sup>Optional</sup> <a name="attribute_statements" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.attributeStatements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]

attribute_statements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.audience"></a>

- *Type:* str

Audience Restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#audience SamlApp#audience}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authenticationPolicy"></a>

- *Type:* str

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `authn_context_class_ref`<sup>Optional</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authnContextClassRef"></a>

- *Type:* str

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `default_relay_state`<sup>Optional</sup> <a name="default_relay_state" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.defaultRelayState"></a>

- *Type:* str

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.destination"></a>

- *Type:* str

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#destination SamlApp#destination}

---

##### `digest_algorithm`<sup>Optional</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.digestAlgorithm"></a>

- *Type:* str

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#enduser_note SamlApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#groups SamlApp#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_ios SamlApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_web SamlApp#hide_web}

---

##### `honor_force_authn`<sup>Optional</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.honorForceAuthn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_issuer`<sup>Optional</sup> <a name="idp_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.idpIssuer"></a>

- *Type:* str

SAML issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `implicit_assignment`<sup>Optional</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.implicitAssignment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.inlineHookId"></a>

- *Type:* str

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyName"></a>

- *Type:* str

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_name SamlApp#key_name}

---

##### `key_years_valid`<sup>Optional</sup> <a name="key_years_valid" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyYearsValid"></a>

- *Type:* typing.Union[int, float]

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#logo SamlApp#logo}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.preconfiguredApp"></a>

- *Type:* str

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.recipient"></a>

- *Type:* str

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#recipient SamlApp#recipient}

---

##### `request_compressed`<sup>Optional</sup> <a name="request_compressed" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.requestCompressed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#request_compressed SamlApp#request_compressed}

---

##### `response_signed`<sup>Optional</sup> <a name="response_signed" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.responseSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#response_signed SamlApp#response_signed}

---

##### `saml_version`<sup>Optional</sup> <a name="saml_version" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.samlVersion"></a>

- *Type:* str

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_version SamlApp#saml_version}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* str

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `single_logout_certificate`<sup>Optional</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutCertificate"></a>

- *Type:* str

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `single_logout_issuer`<sup>Optional</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutIssuer"></a>

- *Type:* str

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `single_logout_url`<sup>Optional</sup> <a name="single_logout_url" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutUrl"></a>

- *Type:* str

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_groups SamlApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_users SamlApp#skip_users}

---

##### `sp_issuer`<sup>Optional</sup> <a name="sp_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.spIssuer"></a>

- *Type:* str

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `sso_url`<sup>Optional</sup> <a name="sso_url" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.ssoUrl"></a>

- *Type:* str

Single Sign On URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sso_url SamlApp#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#status SamlApp#status}

---

##### `subject_name_id_format`<sup>Optional</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdFormat"></a>

- *Type:* str

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `subject_name_id_template`<sup>Optional</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdTemplate"></a>

- *Type:* str

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#timeouts SamlApp#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template SamlApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.users"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#users SamlApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements">put_attribute_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints">reset_acs_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson">reset_app_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned">reset_assertion_signed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements">reset_attribute_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy">reset_authentication_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef">reset_authn_context_class_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState">reset_default_relay_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm">reset_digest_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn">reset_honor_force_authn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer">reset_idp_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment">reset_implicit_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId">reset_inline_hook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid">reset_key_years_valid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp">reset_preconfigured_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRecipient">reset_recipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed">reset_request_compressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned">reset_response_signed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion">reset_saml_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm">reset_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate">reset_single_logout_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer">reset_single_logout_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl">reset_single_logout_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers">reset_skip_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer">reset_sp_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl">reset_sso_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat">reset_subject_name_id_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate">reset_subject_name_id_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.samlApp.SamlApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.samlApp.SamlApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_attribute_statements` <a name="put_attribute_statements" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements"></a>

```python
def put_attribute_statements(
  value: typing.Union[IResolvable, typing.List[SamlAppAttributeStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}.

---

##### `put_users` <a name="put_users" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers"></a>

```python
def put_users(
  value: typing.Union[IResolvable, typing.List[SamlAppUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_acs_endpoints` <a name="reset_acs_endpoints" id="@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints"></a>

```python
def reset_acs_endpoints() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_app_settings_json` <a name="reset_app_settings_json" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson"></a>

```python
def reset_app_settings_json() -> None
```

##### `reset_assertion_signed` <a name="reset_assertion_signed" id="@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned"></a>

```python
def reset_assertion_signed() -> None
```

##### `reset_attribute_statements` <a name="reset_attribute_statements" id="@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements"></a>

```python
def reset_attribute_statements() -> None
```

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-okta.samlApp.SamlApp.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_authentication_policy` <a name="reset_authentication_policy" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy"></a>

```python
def reset_authentication_policy() -> None
```

##### `reset_authn_context_class_ref` <a name="reset_authn_context_class_ref" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef"></a>

```python
def reset_authn_context_class_ref() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_default_relay_state` <a name="reset_default_relay_state" id="@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState"></a>

```python
def reset_default_relay_state() -> None
```

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-okta.samlApp.SamlApp.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_digest_algorithm` <a name="reset_digest_algorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm"></a>

```python
def reset_digest_algorithm() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-okta.samlApp.SamlApp.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_honor_force_authn` <a name="reset_honor_force_authn" id="@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn"></a>

```python
def reset_honor_force_authn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.samlApp.SamlApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_issuer` <a name="reset_idp_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer"></a>

```python
def reset_idp_issuer() -> None
```

##### `reset_implicit_assignment` <a name="reset_implicit_assignment" id="@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment"></a>

```python
def reset_implicit_assignment() -> None
```

##### `reset_inline_hook_id` <a name="reset_inline_hook_id" id="@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId"></a>

```python
def reset_inline_hook_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_key_years_valid` <a name="reset_key_years_valid" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid"></a>

```python
def reset_key_years_valid() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.samlApp.SamlApp.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_preconfigured_app` <a name="reset_preconfigured_app" id="@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp"></a>

```python
def reset_preconfigured_app() -> None
```

##### `reset_recipient` <a name="reset_recipient" id="@cdktf/provider-okta.samlApp.SamlApp.resetRecipient"></a>

```python
def reset_recipient() -> None
```

##### `reset_request_compressed` <a name="reset_request_compressed" id="@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed"></a>

```python
def reset_request_compressed() -> None
```

##### `reset_response_signed` <a name="reset_response_signed" id="@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned"></a>

```python
def reset_response_signed() -> None
```

##### `reset_saml_version` <a name="reset_saml_version" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion"></a>

```python
def reset_saml_version() -> None
```

##### `reset_signature_algorithm` <a name="reset_signature_algorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm"></a>

```python
def reset_signature_algorithm() -> None
```

##### `reset_single_logout_certificate` <a name="reset_single_logout_certificate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate"></a>

```python
def reset_single_logout_certificate() -> None
```

##### `reset_single_logout_issuer` <a name="reset_single_logout_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer"></a>

```python
def reset_single_logout_issuer() -> None
```

##### `reset_single_logout_url` <a name="reset_single_logout_url" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl"></a>

```python
def reset_single_logout_url() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_users` <a name="reset_skip_users" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers"></a>

```python
def reset_skip_users() -> None
```

##### `reset_sp_issuer` <a name="reset_sp_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer"></a>

```python
def reset_sp_issuer() -> None
```

##### `reset_sso_url` <a name="reset_sso_url" id="@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl"></a>

```python
def reset_sso_url() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.samlApp.SamlApp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_name_id_format` <a name="reset_subject_name_id_format" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat"></a>

```python
def reset_subject_name_id_format() -> None
```

##### `reset_subject_name_id_template` <a name="reset_subject_name_id_template" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate"></a>

```python
def reset_subject_name_id_template() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-okta.samlApp.SamlApp.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlApp.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements">attribute_statements</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl">embed_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityKey">entity_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl">entity_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.features">features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding">http_post_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding">http_redirect_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl">metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput">acs_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput">app_settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput">assertion_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput">attribute_statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput">authentication_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput">authn_context_class_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput">default_relay_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput">digest_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput">honor_force_authn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput">idp_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput">implicit_assignment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput">inline_hook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput">key_years_valid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput">preconfigured_app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput">recipient_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput">request_compressed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput">response_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput">saml_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput">signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput">single_logout_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput">single_logout_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput">single_logout_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput">skip_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput">sp_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput">subject_name_id_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput">subject_name_id_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.usersInput">users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned">assertion_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState">default_relay_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn">honor_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer">idp_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid">key_years_valid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipient">recipient</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned">response_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion">saml_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer">sp_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.samlApp.SamlApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.samlApp.SamlApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attribute_statements`<sup>Required</sup> <a name="attribute_statements" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements"></a>

```python
attribute_statements: SamlAppAttributeStatementsList
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `embed_url`<sup>Required</sup> <a name="embed_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl"></a>

```python
embed_url: str
```

- *Type:* str

---

##### `entity_key`<sup>Required</sup> <a name="entity_key" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityKey"></a>

```python
entity_key: str
```

- *Type:* str

---

##### `entity_url`<sup>Required</sup> <a name="entity_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl"></a>

```python
entity_url: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.samlApp.SamlApp.property.features"></a>

```python
features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_post_binding`<sup>Required</sup> <a name="http_post_binding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding"></a>

```python
http_post_binding: str
```

- *Type:* str

---

##### `http_redirect_binding`<sup>Required</sup> <a name="http_redirect_binding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding"></a>

```python
http_redirect_binding: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-okta.samlApp.SamlApp.property.keys"></a>

```python
keys: SamlAppKeysList
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a>

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `metadata_url`<sup>Required</sup> <a name="metadata_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl"></a>

```python
metadata_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeouts"></a>

```python
timeouts: SamlAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlApp.property.users"></a>

```python
users: SamlAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acs_endpoints_input`<sup>Optional</sup> <a name="acs_endpoints_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput"></a>

```python
acs_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `app_settings_json_input`<sup>Optional</sup> <a name="app_settings_json_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput"></a>

```python
app_settings_json_input: str
```

- *Type:* str

---

##### `assertion_signed_input`<sup>Optional</sup> <a name="assertion_signed_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput"></a>

```python
assertion_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attribute_statements_input`<sup>Optional</sup> <a name="attribute_statements_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput"></a>

```python
attribute_statements_input: typing.Union[IResolvable, typing.List[SamlAppAttributeStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `authentication_policy_input`<sup>Optional</sup> <a name="authentication_policy_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput"></a>

```python
authentication_policy_input: str
```

- *Type:* str

---

##### `authn_context_class_ref_input`<sup>Optional</sup> <a name="authn_context_class_ref_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput"></a>

```python
authn_context_class_ref_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_relay_state_input`<sup>Optional</sup> <a name="default_relay_state_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput"></a>

```python
default_relay_state_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `digest_algorithm_input`<sup>Optional</sup> <a name="digest_algorithm_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput"></a>

```python
digest_algorithm_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `honor_force_authn_input`<sup>Optional</sup> <a name="honor_force_authn_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput"></a>

```python
honor_force_authn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_issuer_input`<sup>Optional</sup> <a name="idp_issuer_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput"></a>

```python
idp_issuer_input: str
```

- *Type:* str

---

##### `implicit_assignment_input`<sup>Optional</sup> <a name="implicit_assignment_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput"></a>

```python
implicit_assignment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inline_hook_id_input`<sup>Optional</sup> <a name="inline_hook_id_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput"></a>

```python
inline_hook_id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_years_valid_input`<sup>Optional</sup> <a name="key_years_valid_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput"></a>

```python
key_years_valid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `preconfigured_app_input`<sup>Optional</sup> <a name="preconfigured_app_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput"></a>

```python
preconfigured_app_input: str
```

- *Type:* str

---

##### `recipient_input`<sup>Optional</sup> <a name="recipient_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput"></a>

```python
recipient_input: str
```

- *Type:* str

---

##### `request_compressed_input`<sup>Optional</sup> <a name="request_compressed_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput"></a>

```python
request_compressed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_signed_input`<sup>Optional</sup> <a name="response_signed_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput"></a>

```python
response_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml_version_input`<sup>Optional</sup> <a name="saml_version_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput"></a>

```python
saml_version_input: str
```

- *Type:* str

---

##### `signature_algorithm_input`<sup>Optional</sup> <a name="signature_algorithm_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput"></a>

```python
signature_algorithm_input: str
```

- *Type:* str

---

##### `single_logout_certificate_input`<sup>Optional</sup> <a name="single_logout_certificate_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput"></a>

```python
single_logout_certificate_input: str
```

- *Type:* str

---

##### `single_logout_issuer_input`<sup>Optional</sup> <a name="single_logout_issuer_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput"></a>

```python
single_logout_issuer_input: str
```

- *Type:* str

---

##### `single_logout_url_input`<sup>Optional</sup> <a name="single_logout_url_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput"></a>

```python
single_logout_url_input: str
```

- *Type:* str

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users_input`<sup>Optional</sup> <a name="skip_users_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput"></a>

```python
skip_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sp_issuer_input`<sup>Optional</sup> <a name="sp_issuer_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput"></a>

```python
sp_issuer_input: str
```

- *Type:* str

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_name_id_format_input`<sup>Optional</sup> <a name="subject_name_id_format_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput"></a>

```python
subject_name_id_format_input: str
```

- *Type:* str

---

##### `subject_name_id_template_input`<sup>Optional</sup> <a name="subject_name_id_template_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput"></a>

```python
subject_name_id_template_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SamlAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>, cdktf.IResolvable]

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-okta.samlApp.SamlApp.property.usersInput"></a>

```python
users_input: typing.Union[IResolvable, typing.List[SamlAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acs_endpoints`<sup>Required</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints"></a>

```python
acs_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `app_settings_json`<sup>Required</sup> <a name="app_settings_json" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

---

##### `assertion_signed`<sup>Required</sup> <a name="assertion_signed" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned"></a>

```python
assertion_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlApp.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

---

##### `authn_context_class_ref`<sup>Required</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef"></a>

```python
authn_context_class_ref: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_relay_state`<sup>Required</sup> <a name="default_relay_state" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState"></a>

```python
default_relay_state: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlApp.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `digest_algorithm`<sup>Required</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm"></a>

```python
digest_algorithm: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlApp.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `honor_force_authn`<sup>Required</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn"></a>

```python
honor_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_issuer`<sup>Required</sup> <a name="idp_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer"></a>

```python
idp_issuer: str
```

- *Type:* str

---

##### `implicit_assignment`<sup>Required</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment"></a>

```python
implicit_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inline_hook_id`<sup>Required</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_years_valid`<sup>Required</sup> <a name="key_years_valid" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid"></a>

```python
key_years_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlApp.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlApp.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `preconfigured_app`<sup>Required</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

---

##### `request_compressed`<sup>Required</sup> <a name="request_compressed" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed"></a>

```python
request_compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_signed`<sup>Required</sup> <a name="response_signed" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned"></a>

```python
response_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml_version`<sup>Required</sup> <a name="saml_version" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion"></a>

```python
saml_version: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `single_logout_certificate`<sup>Required</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate"></a>

```python
single_logout_certificate: str
```

- *Type:* str

---

##### `single_logout_issuer`<sup>Required</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer"></a>

```python
single_logout_issuer: str
```

- *Type:* str

---

##### `single_logout_url`<sup>Required</sup> <a name="single_logout_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl"></a>

```python
single_logout_url: str
```

- *Type:* str

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users`<sup>Required</sup> <a name="skip_users" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sp_issuer`<sup>Required</sup> <a name="sp_issuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer"></a>

```python
sp_issuer: str
```

- *Type:* str

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_name_id_format`<sup>Required</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat"></a>

```python
subject_name_id_format: str
```

- *Type:* str

---

##### `subject_name_id_template`<sup>Required</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate"></a>

```python
subject_name_id_template: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAppAttributeStatements <a name="SamlAppAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppAttributeStatements(
  name: str,
  filter_type: str = None,
  filter_value: str = None,
  namespace: str = None,
  type: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name">name</a></code> | <code>str</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType">filter_type</a></code> | <code>str</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue">filter_value</a></code> | <code>str</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace">namespace</a></code> | <code>str</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type">type</a></code> | <code>str</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name"></a>

```python
name: str
```

- *Type:* str

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#name SamlApp#name}

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Type of group attribute filter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_type SamlApp#filter_type}

---

##### `filter_value`<sup>Optional</sup> <a name="filter_value" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue"></a>

```python
filter_value: str
```

- *Type:* str

Filter value to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_value SamlApp#filter_value}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The name format of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#namespace SamlApp#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type"></a>

```python
type: str
```

- *Type:* str

The type of attribute statements object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#type SamlApp#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}.

---

### SamlAppConfig <a name="SamlAppConfig" id="@cdktf/provider-okta.samlApp.SamlAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  acs_endpoints: typing.List[str] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  assertion_signed: typing.Union[bool, IResolvable] = None,
  attribute_statements: typing.Union[IResolvable, typing.List[SamlAppAttributeStatements]] = None,
  audience: str = None,
  authentication_policy: str = None,
  authn_context_class_ref: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  default_relay_state: str = None,
  destination: str = None,
  digest_algorithm: str = None,
  enduser_note: str = None,
  groups: typing.List[str] = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  honor_force_authn: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idp_issuer: str = None,
  implicit_assignment: typing.Union[bool, IResolvable] = None,
  inline_hook_id: str = None,
  key_name: str = None,
  key_years_valid: typing.Union[int, float] = None,
  logo: str = None,
  preconfigured_app: str = None,
  recipient: str = None,
  request_compressed: typing.Union[bool, IResolvable] = None,
  response_signed: typing.Union[bool, IResolvable] = None,
  saml_version: str = None,
  signature_algorithm: str = None,
  single_logout_certificate: str = None,
  single_logout_issuer: str = None,
  single_logout_url: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  sp_issuer: str = None,
  sso_url: str = None,
  status: str = None,
  subject_name_id_format: str = None,
  subject_name_id_template: str = None,
  timeouts: SamlAppTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[SamlAppUsers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned">assertion_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements">attribute_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience">audience</a></code> | <code>str</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState">default_relay_state</a></code> | <code>str</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination">destination</a></code> | <code>str</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn">honor_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer">idp_issuer</a></code> | <code>str</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName">key_name</a></code> | <code>str</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid">key_years_valid</a></code> | <code>typing.Union[int, float]</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient">recipient</a></code> | <code>str</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned">response_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion">saml_version</a></code> | <code>str</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer">sp_issuer</a></code> | <code>str</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#label SamlApp#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `acs_endpoints`<sup>Optional</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints"></a>

```python
acs_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#admin_note SamlApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_links_json SamlApp#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `assertion_signed`<sup>Optional</sup> <a name="assertion_signed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned"></a>

```python
assertion_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `attribute_statements`<sup>Optional</sup> <a name="attribute_statements" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements"></a>

```python
attribute_statements: typing.Union[IResolvable, typing.List[SamlAppAttributeStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]

attribute_statements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience Restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#audience SamlApp#audience}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `authn_context_class_ref`<sup>Optional</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef"></a>

```python
authn_context_class_ref: str
```

- *Type:* str

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `default_relay_state`<sup>Optional</sup> <a name="default_relay_state" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState"></a>

```python
default_relay_state: str
```

- *Type:* str

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#destination SamlApp#destination}

---

##### `digest_algorithm`<sup>Optional</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm"></a>

```python
digest_algorithm: str
```

- *Type:* str

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#enduser_note SamlApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#groups SamlApp#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_ios SamlApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_web SamlApp#hide_web}

---

##### `honor_force_authn`<sup>Optional</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn"></a>

```python
honor_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_issuer`<sup>Optional</sup> <a name="idp_issuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer"></a>

```python
idp_issuer: str
```

- *Type:* str

SAML issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `implicit_assignment`<sup>Optional</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment"></a>

```python
implicit_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_name SamlApp#key_name}

---

##### `key_years_valid`<sup>Optional</sup> <a name="key_years_valid" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid"></a>

```python
key_years_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#logo SamlApp#logo}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#recipient SamlApp#recipient}

---

##### `request_compressed`<sup>Optional</sup> <a name="request_compressed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed"></a>

```python
request_compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#request_compressed SamlApp#request_compressed}

---

##### `response_signed`<sup>Optional</sup> <a name="response_signed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned"></a>

```python
response_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#response_signed SamlApp#response_signed}

---

##### `saml_version`<sup>Optional</sup> <a name="saml_version" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion"></a>

```python
saml_version: str
```

- *Type:* str

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_version SamlApp#saml_version}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `single_logout_certificate`<sup>Optional</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate"></a>

```python
single_logout_certificate: str
```

- *Type:* str

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `single_logout_issuer`<sup>Optional</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer"></a>

```python
single_logout_issuer: str
```

- *Type:* str

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `single_logout_url`<sup>Optional</sup> <a name="single_logout_url" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl"></a>

```python
single_logout_url: str
```

- *Type:* str

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_groups SamlApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_users SamlApp#skip_users}

---

##### `sp_issuer`<sup>Optional</sup> <a name="sp_issuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer"></a>

```python
sp_issuer: str
```

- *Type:* str

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `sso_url`<sup>Optional</sup> <a name="sso_url" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

Single Sign On URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sso_url SamlApp#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#status SamlApp#status}

---

##### `subject_name_id_format`<sup>Optional</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat"></a>

```python
subject_name_id_format: str
```

- *Type:* str

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `subject_name_id_template`<sup>Optional</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate"></a>

```python
subject_name_id_template: str
```

- *Type:* str

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts"></a>

```python
timeouts: SamlAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#timeouts SamlApp#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template SamlApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.users"></a>

```python
users: typing.Union[IResolvable, typing.List[SamlAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#users SamlApp#users}

---

### SamlAppKeys <a name="SamlAppKeys" id="@cdktf/provider-okta.samlApp.SamlAppKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppKeys()
```


### SamlAppTimeouts <a name="SamlAppTimeouts" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}.

---

### SamlAppUsers <a name="SamlAppUsers" id="@cdktf/provider-okta.samlApp.SamlAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppUsers(
  id: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.id">id</a></code> | <code>str</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.password">password</a></code> | <code>str</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.username">username</a></code> | <code>str</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.id"></a>

```python
id: str
```

- *Type:* str

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.password"></a>

```python
password: str
```

- *Type:* str

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#password SamlApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.username"></a>

```python
username: str
```

- *Type:* str

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#username SamlApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAppAttributeStatementsList <a name="SamlAppAttributeStatementsList" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppAttributeStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SamlAppAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SamlAppAttributeStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>]]

---


### SamlAppAttributeStatementsOutputReference <a name="SamlAppAttributeStatementsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppAttributeStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue">reset_filter_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_filter_value` <a name="reset_filter_value" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue"></a>

```python
def reset_filter_value() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput">filter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue">filter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `filter_value_input`<sup>Optional</sup> <a name="filter_value_input" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput"></a>

```python
filter_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `filter_value`<sup>Required</sup> <a name="filter_value" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue"></a>

```python
filter_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SamlAppAttributeStatements, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>, cdktf.IResolvable]

---


### SamlAppKeysList <a name="SamlAppKeysList" id="@cdktf/provider-okta.samlApp.SamlAppKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SamlAppKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SamlAppKeysOutputReference <a name="SamlAppKeysOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e">e</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty">kty</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n">n</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use">use</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C">x5_c</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256">x5_t_s256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e"></a>

```python
e: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty"></a>

```python
kty: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n"></a>

```python
n: str
```

- *Type:* str

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use"></a>

```python
use: str
```

- *Type:* str

---

##### `x5_c`<sup>Required</sup> <a name="x5_c" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C"></a>

```python
x5_c: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x5_t_s256`<sup>Required</sup> <a name="x5_t_s256" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256"></a>

```python
x5_t_s256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue"></a>

```python
internal_value: SamlAppKeys
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a>

---


### SamlAppTimeoutsOutputReference <a name="SamlAppTimeoutsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SamlAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>, cdktf.IResolvable]

---


### SamlAppUsersList <a name="SamlAppUsersList" id="@cdktf/provider-okta.samlApp.SamlAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SamlAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SamlAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>]]

---


### SamlAppUsersOutputReference <a name="SamlAppUsersOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import saml_app

samlApp.SamlAppUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SamlAppUsers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>, cdktf.IResolvable]

---



