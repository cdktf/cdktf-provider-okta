# `appSaml` Submodule <a name="`appSaml` Submodule" id="@cdktf/provider-okta.appSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSaml <a name="AppSaml" id="@cdktf/provider-okta.appSaml.AppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSaml(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
  acs_endpoints_indices: typing.Union[IResolvable, typing.List[AppSamlAcsEndpointsIndices]] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  assertion_signed: typing.Union[bool, IResolvable] = None,
  attribute_statements: typing.Union[IResolvable, typing.List[AppSamlAttributeStatements]] = None,
  audience: str = None,
  authentication_policy: str = None,
  authn_context_class_ref: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  default_relay_state: str = None,
  destination: str = None,
  digest_algorithm: str = None,
  enduser_note: str = None,
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
  saml_signed_request_enabled: typing.Union[bool, IResolvable] = None,
  saml_version: str = None,
  signature_algorithm: str = None,
  single_logout_certificate: str = None,
  single_logout_issuer: str = None,
  single_logout_url: str = None,
  sp_issuer: str = None,
  sso_url: str = None,
  status: str = None,
  subject_name_id_format: str = None,
  subject_name_id_template: str = None,
  timeouts: AppSamlTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.label">label</a></code> | <code>str</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | An array of ACS endpoints. You can configure a maximum of 100 endpoints. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.acsEndpointsIndices">acs_endpoints_indices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]</code> | acs_endpoints_indices block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.assertionSigned">assertion_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.attributeStatements">attribute_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.audience">audience</a></code> | <code>str</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | The ID of the associated `app_signon_policy`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. Default is: `false`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.defaultRelayState">default_relay_state</a></code> | <code>str</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.honorForceAuthn">honor_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prompt user to re-authenticate if SP asks for it. Default is: `false`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.idpIssuer">idp_issuer</a></code> | <code>str</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.inlineHookId">inline_hook_id</a></code> | <code>str</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Certificate name. This modulates the rotation of keys. New name == new key. Required to be set with `key_years_valid`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyYearsValid">key_years_valid</a></code> | <code>typing.Union[int, float]</code> | Number of years the certificate is valid (2 - 10 years). |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Name of application from the Okta Integration Network. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.recipient">recipient</a></code> | <code>str</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.responseSigned">response_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlSignedRequestEnabled">saml_signed_request_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlVersion">saml_version</a></code> | <code>str</code> | SAML version for the app's sign-on mode. Valid values are: `2.0` or `1.1`. Default is `2.0`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | Signature algorithm used to digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.spIssuer">sp_issuer</a></code> | <code>str</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.ssoUrl">sso_url</a></code> | <code>str</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. Default: `BUILT_IN`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.label"></a>

- *Type:* str

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#label AppSaml#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `acs_endpoints`<sup>Optional</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.acsEndpoints"></a>

- *Type:* typing.List[str]

An array of ACS endpoints. You can configure a maximum of 100 endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `acs_endpoints_indices`<sup>Optional</sup> <a name="acs_endpoints_indices" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.acsEndpointsIndices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]

acs_endpoints_indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#acs_endpoints_indices AppSaml#acs_endpoints_indices}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appSettingsJson"></a>

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `assertion_signed`<sup>Optional</sup> <a name="assertion_signed" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.assertionSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `attribute_statements`<sup>Optional</sup> <a name="attribute_statements" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.attributeStatements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.audience"></a>

- *Type:* str

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#audience AppSaml#audience}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authenticationPolicy"></a>

- *Type:* str

The ID of the associated `app_signon_policy`.

If this property is removed from the application the `default` sign-on-policy will be associated with this application.y

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `authn_context_class_ref`<sup>Optional</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authnContextClassRef"></a>

- *Type:* str

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar. Default is: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `default_relay_state`<sup>Optional</sup> <a name="default_relay_state" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.defaultRelayState"></a>

- *Type:* str

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.destination"></a>

- *Type:* str

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#destination AppSaml#destination}

---

##### `digest_algorithm`<sup>Optional</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.digestAlgorithm"></a>

- *Type:* str

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `honor_force_authn`<sup>Optional</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.honorForceAuthn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prompt user to re-authenticate if SP asks for it. Default is: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_issuer`<sup>Optional</sup> <a name="idp_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.idpIssuer"></a>

- *Type:* str

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `implicit_assignment`<sup>Optional</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.implicitAssignment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.inlineHookId"></a>

- *Type:* str

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyName"></a>

- *Type:* str

Certificate name. This modulates the rotation of keys. New name == new key. Required to be set with `key_years_valid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `key_years_valid`<sup>Optional</sup> <a name="key_years_valid" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyYearsValid"></a>

- *Type:* typing.Union[int, float]

Number of years the certificate is valid (2 - 10 years).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.logo"></a>

- *Type:* str

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#logo AppSaml#logo}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.preconfiguredApp"></a>

- *Type:* str

Name of application from the Okta Integration Network.

For instance 'slack'. If not included a custom app will be created.  If not provided the following arguments are required:
'sso_url'
'recipient'
'destination'
'audience'
'subject_name_id_template'
'subject_name_id_format'
'signature_algorithm'
'digest_algorithm'
'authn_context_class_ref'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.recipient"></a>

- *Type:* str

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `request_compressed`<sup>Optional</sup> <a name="request_compressed" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.requestCompressed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `response_signed`<sup>Optional</sup> <a name="response_signed" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.responseSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `saml_signed_request_enabled`<sup>Optional</sup> <a name="saml_signed_request_enabled" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlSignedRequestEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `saml_version`<sup>Optional</sup> <a name="saml_version" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlVersion"></a>

- *Type:* str

SAML version for the app's sign-on mode. Valid values are: `2.0` or `1.1`. Default is `2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* str

Signature algorithm used to digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `single_logout_certificate`<sup>Optional</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutCertificate"></a>

- *Type:* str

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Note: should be provided without `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`, see [official documentation](https://developer.okta.com/docs/reference/api/apps/#service-provider-certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `single_logout_issuer`<sup>Optional</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutIssuer"></a>

- *Type:* str

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `single_logout_url`<sup>Optional</sup> <a name="single_logout_url" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutUrl"></a>

- *Type:* str

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `sp_issuer`<sup>Optional</sup> <a name="sp_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.spIssuer"></a>

- *Type:* str

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `sso_url`<sup>Optional</sup> <a name="sso_url" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.ssoUrl"></a>

- *Type:* str

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.status"></a>

- *Type:* str

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#status AppSaml#status}

---

##### `subject_name_id_format`<sup>Optional</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdFormat"></a>

- *Type:* str

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `subject_name_id_template`<sup>Optional</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdTemplate"></a>

- *Type:* str

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putAcsEndpointsIndices">put_acs_endpoints_indices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements">put_attribute_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints">reset_acs_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpointsIndices">reset_acs_endpoints_indices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson">reset_app_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned">reset_assertion_signed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements">reset_attribute_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy">reset_authentication_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef">reset_authn_context_class_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState">reset_default_relay_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm">reset_digest_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn">reset_honor_force_authn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer">reset_idp_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment">reset_implicit_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId">reset_inline_hook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid">reset_key_years_valid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp">reset_preconfigured_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRecipient">reset_recipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed">reset_request_compressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned">reset_response_signed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled">reset_saml_signed_request_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion">reset_saml_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm">reset_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate">reset_single_logout_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer">reset_single_logout_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl">reset_single_logout_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer">reset_sp_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl">reset_sso_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat">reset_subject_name_id_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate">reset_subject_name_id_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSaml.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appSaml.AppSaml.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appSaml.AppSaml.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appSaml.AppSaml.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appSaml.AppSaml.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appSaml.AppSaml.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appSaml.AppSaml.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_acs_endpoints_indices` <a name="put_acs_endpoints_indices" id="@cdktf/provider-okta.appSaml.AppSaml.putAcsEndpointsIndices"></a>

```python
def put_acs_endpoints_indices(
  value: typing.Union[IResolvable, typing.List[AppSamlAcsEndpointsIndices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putAcsEndpointsIndices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]

---

##### `put_attribute_statements` <a name="put_attribute_statements" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements"></a>

```python
def put_attribute_statements(
  value: typing.Union[IResolvable, typing.List[AppSamlAttributeStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#create AppSaml#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#read AppSaml#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#update AppSaml#update}.

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_acs_endpoints` <a name="reset_acs_endpoints" id="@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints"></a>

```python
def reset_acs_endpoints() -> None
```

##### `reset_acs_endpoints_indices` <a name="reset_acs_endpoints_indices" id="@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpointsIndices"></a>

```python
def reset_acs_endpoints_indices() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_app_settings_json` <a name="reset_app_settings_json" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson"></a>

```python
def reset_app_settings_json() -> None
```

##### `reset_assertion_signed` <a name="reset_assertion_signed" id="@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned"></a>

```python
def reset_assertion_signed() -> None
```

##### `reset_attribute_statements` <a name="reset_attribute_statements" id="@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements"></a>

```python
def reset_attribute_statements() -> None
```

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-okta.appSaml.AppSaml.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_authentication_policy` <a name="reset_authentication_policy" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy"></a>

```python
def reset_authentication_policy() -> None
```

##### `reset_authn_context_class_ref` <a name="reset_authn_context_class_ref" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef"></a>

```python
def reset_authn_context_class_ref() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_default_relay_state` <a name="reset_default_relay_state" id="@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState"></a>

```python
def reset_default_relay_state() -> None
```

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-okta.appSaml.AppSaml.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_digest_algorithm` <a name="reset_digest_algorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm"></a>

```python
def reset_digest_algorithm() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_honor_force_authn` <a name="reset_honor_force_authn" id="@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn"></a>

```python
def reset_honor_force_authn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appSaml.AppSaml.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_issuer` <a name="reset_idp_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer"></a>

```python
def reset_idp_issuer() -> None
```

##### `reset_implicit_assignment` <a name="reset_implicit_assignment" id="@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment"></a>

```python
def reset_implicit_assignment() -> None
```

##### `reset_inline_hook_id` <a name="reset_inline_hook_id" id="@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId"></a>

```python
def reset_inline_hook_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_key_years_valid` <a name="reset_key_years_valid" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid"></a>

```python
def reset_key_years_valid() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.appSaml.AppSaml.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_preconfigured_app` <a name="reset_preconfigured_app" id="@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp"></a>

```python
def reset_preconfigured_app() -> None
```

##### `reset_recipient` <a name="reset_recipient" id="@cdktf/provider-okta.appSaml.AppSaml.resetRecipient"></a>

```python
def reset_recipient() -> None
```

##### `reset_request_compressed` <a name="reset_request_compressed" id="@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed"></a>

```python
def reset_request_compressed() -> None
```

##### `reset_response_signed` <a name="reset_response_signed" id="@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned"></a>

```python
def reset_response_signed() -> None
```

##### `reset_saml_signed_request_enabled` <a name="reset_saml_signed_request_enabled" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled"></a>

```python
def reset_saml_signed_request_enabled() -> None
```

##### `reset_saml_version` <a name="reset_saml_version" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion"></a>

```python
def reset_saml_version() -> None
```

##### `reset_signature_algorithm` <a name="reset_signature_algorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm"></a>

```python
def reset_signature_algorithm() -> None
```

##### `reset_single_logout_certificate` <a name="reset_single_logout_certificate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate"></a>

```python
def reset_single_logout_certificate() -> None
```

##### `reset_single_logout_issuer` <a name="reset_single_logout_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer"></a>

```python
def reset_single_logout_issuer() -> None
```

##### `reset_single_logout_url` <a name="reset_single_logout_url" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl"></a>

```python
def reset_single_logout_url() -> None
```

##### `reset_sp_issuer` <a name="reset_sp_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer"></a>

```python
def reset_sp_issuer() -> None
```

##### `reset_sso_url` <a name="reset_sso_url" id="@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl"></a>

```python
def reset_sso_url() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appSaml.AppSaml.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subject_name_id_format` <a name="reset_subject_name_id_format" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat"></a>

```python
def reset_subject_name_id_format() -> None
```

##### `reset_subject_name_id_template` <a name="reset_subject_name_id_template" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate"></a>

```python
def reset_subject_name_id_template() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSaml.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSaml.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSaml.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSaml.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppSaml to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsIndices">acs_endpoints_indices</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList">AppSamlAcsEndpointsIndicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements">attribute_statements</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl">embed_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityKey">entity_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl">entity_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.features">features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding">http_post_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding">http_redirect_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl">metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsIndicesInput">acs_endpoints_indices_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput">acs_endpoints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput">app_settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput">assertion_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput">attribute_statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput">authentication_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput">authn_context_class_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput">default_relay_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput">digest_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput">honor_force_authn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput">idp_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput">implicit_assignment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput">inline_hook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput">key_years_valid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput">preconfigured_app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput">recipient_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput">request_compressed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput">response_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput">saml_signed_request_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput">saml_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput">signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput">single_logout_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput">single_logout_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput">single_logout_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput">sp_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput">sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput">subject_name_id_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput">subject_name_id_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned">assertion_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState">default_relay_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn">honor_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer">idp_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid">key_years_valid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipient">recipient</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned">response_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled">saml_signed_request_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion">saml_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer">sp_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSaml.AppSaml.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSaml.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSaml.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSaml.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSaml.AppSaml.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acs_endpoints_indices`<sup>Required</sup> <a name="acs_endpoints_indices" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsIndices"></a>

```python
acs_endpoints_indices: AppSamlAcsEndpointsIndicesList
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList">AppSamlAcsEndpointsIndicesList</a>

---

##### `attribute_statements`<sup>Required</sup> <a name="attribute_statements" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements"></a>

```python
attribute_statements: AppSamlAttributeStatementsList
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `embed_url`<sup>Required</sup> <a name="embed_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl"></a>

```python
embed_url: str
```

- *Type:* str

---

##### `entity_key`<sup>Required</sup> <a name="entity_key" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityKey"></a>

```python
entity_key: str
```

- *Type:* str

---

##### `entity_url`<sup>Required</sup> <a name="entity_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl"></a>

```python
entity_url: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.appSaml.AppSaml.property.features"></a>

```python
features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_post_binding`<sup>Required</sup> <a name="http_post_binding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding"></a>

```python
http_post_binding: str
```

- *Type:* str

---

##### `http_redirect_binding`<sup>Required</sup> <a name="http_redirect_binding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding"></a>

```python
http_redirect_binding: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-okta.appSaml.AppSaml.property.keys"></a>

```python
keys: AppSamlKeysList
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a>

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `metadata_url`<sup>Required</sup> <a name="metadata_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl"></a>

```python
metadata_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSaml.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeouts"></a>

```python
timeouts: AppSamlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acs_endpoints_indices_input`<sup>Optional</sup> <a name="acs_endpoints_indices_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsIndicesInput"></a>

```python
acs_endpoints_indices_input: typing.Union[IResolvable, typing.List[AppSamlAcsEndpointsIndices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]

---

##### `acs_endpoints_input`<sup>Optional</sup> <a name="acs_endpoints_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput"></a>

```python
acs_endpoints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `app_settings_json_input`<sup>Optional</sup> <a name="app_settings_json_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput"></a>

```python
app_settings_json_input: str
```

- *Type:* str

---

##### `assertion_signed_input`<sup>Optional</sup> <a name="assertion_signed_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput"></a>

```python
assertion_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attribute_statements_input`<sup>Optional</sup> <a name="attribute_statements_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput"></a>

```python
attribute_statements_input: typing.Union[IResolvable, typing.List[AppSamlAttributeStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `authentication_policy_input`<sup>Optional</sup> <a name="authentication_policy_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput"></a>

```python
authentication_policy_input: str
```

- *Type:* str

---

##### `authn_context_class_ref_input`<sup>Optional</sup> <a name="authn_context_class_ref_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput"></a>

```python
authn_context_class_ref_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_relay_state_input`<sup>Optional</sup> <a name="default_relay_state_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput"></a>

```python
default_relay_state_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `digest_algorithm_input`<sup>Optional</sup> <a name="digest_algorithm_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput"></a>

```python
digest_algorithm_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `honor_force_authn_input`<sup>Optional</sup> <a name="honor_force_authn_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput"></a>

```python
honor_force_authn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_issuer_input`<sup>Optional</sup> <a name="idp_issuer_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput"></a>

```python
idp_issuer_input: str
```

- *Type:* str

---

##### `implicit_assignment_input`<sup>Optional</sup> <a name="implicit_assignment_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput"></a>

```python
implicit_assignment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inline_hook_id_input`<sup>Optional</sup> <a name="inline_hook_id_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput"></a>

```python
inline_hook_id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_years_valid_input`<sup>Optional</sup> <a name="key_years_valid_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput"></a>

```python
key_years_valid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `preconfigured_app_input`<sup>Optional</sup> <a name="preconfigured_app_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput"></a>

```python
preconfigured_app_input: str
```

- *Type:* str

---

##### `recipient_input`<sup>Optional</sup> <a name="recipient_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput"></a>

```python
recipient_input: str
```

- *Type:* str

---

##### `request_compressed_input`<sup>Optional</sup> <a name="request_compressed_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput"></a>

```python
request_compressed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_signed_input`<sup>Optional</sup> <a name="response_signed_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput"></a>

```python
response_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml_signed_request_enabled_input`<sup>Optional</sup> <a name="saml_signed_request_enabled_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput"></a>

```python
saml_signed_request_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml_version_input`<sup>Optional</sup> <a name="saml_version_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput"></a>

```python
saml_version_input: str
```

- *Type:* str

---

##### `signature_algorithm_input`<sup>Optional</sup> <a name="signature_algorithm_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput"></a>

```python
signature_algorithm_input: str
```

- *Type:* str

---

##### `single_logout_certificate_input`<sup>Optional</sup> <a name="single_logout_certificate_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput"></a>

```python
single_logout_certificate_input: str
```

- *Type:* str

---

##### `single_logout_issuer_input`<sup>Optional</sup> <a name="single_logout_issuer_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput"></a>

```python
single_logout_issuer_input: str
```

- *Type:* str

---

##### `single_logout_url_input`<sup>Optional</sup> <a name="single_logout_url_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput"></a>

```python
single_logout_url_input: str
```

- *Type:* str

---

##### `sp_issuer_input`<sup>Optional</sup> <a name="sp_issuer_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput"></a>

```python
sp_issuer_input: str
```

- *Type:* str

---

##### `sso_url_input`<sup>Optional</sup> <a name="sso_url_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput"></a>

```python
sso_url_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subject_name_id_format_input`<sup>Optional</sup> <a name="subject_name_id_format_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput"></a>

```python
subject_name_id_format_input: str
```

- *Type:* str

---

##### `subject_name_id_template_input`<sup>Optional</sup> <a name="subject_name_id_template_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput"></a>

```python
subject_name_id_template_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppSamlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>]

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acs_endpoints`<sup>Required</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints"></a>

```python
acs_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `app_settings_json`<sup>Required</sup> <a name="app_settings_json" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

---

##### `assertion_signed`<sup>Required</sup> <a name="assertion_signed" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned"></a>

```python
assertion_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSaml.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

---

##### `authn_context_class_ref`<sup>Required</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef"></a>

```python
authn_context_class_ref: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_relay_state`<sup>Required</sup> <a name="default_relay_state" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState"></a>

```python
default_relay_state: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSaml.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `digest_algorithm`<sup>Required</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm"></a>

```python
digest_algorithm: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `honor_force_authn`<sup>Required</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn"></a>

```python
honor_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_issuer`<sup>Required</sup> <a name="idp_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer"></a>

```python
idp_issuer: str
```

- *Type:* str

---

##### `implicit_assignment`<sup>Required</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment"></a>

```python
implicit_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inline_hook_id`<sup>Required</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_years_valid`<sup>Required</sup> <a name="key_years_valid" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid"></a>

```python
key_years_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSaml.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSaml.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `preconfigured_app`<sup>Required</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

---

##### `request_compressed`<sup>Required</sup> <a name="request_compressed" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed"></a>

```python
request_compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_signed`<sup>Required</sup> <a name="response_signed" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned"></a>

```python
response_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml_signed_request_enabled`<sup>Required</sup> <a name="saml_signed_request_enabled" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled"></a>

```python
saml_signed_request_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml_version`<sup>Required</sup> <a name="saml_version" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion"></a>

```python
saml_version: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `single_logout_certificate`<sup>Required</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate"></a>

```python
single_logout_certificate: str
```

- *Type:* str

---

##### `single_logout_issuer`<sup>Required</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer"></a>

```python
single_logout_issuer: str
```

- *Type:* str

---

##### `single_logout_url`<sup>Required</sup> <a name="single_logout_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl"></a>

```python
single_logout_url: str
```

- *Type:* str

---

##### `sp_issuer`<sup>Required</sup> <a name="sp_issuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer"></a>

```python
sp_issuer: str
```

- *Type:* str

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSaml.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_name_id_format`<sup>Required</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat"></a>

```python
subject_name_id_format: str
```

- *Type:* str

---

##### `subject_name_id_template`<sup>Required</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate"></a>

```python
subject_name_id_template: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppSamlAcsEndpointsIndices <a name="AppSamlAcsEndpointsIndices" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlAcsEndpointsIndices(
  index: typing.Union[int, float],
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices.property.index">index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#index AppSaml#index}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#url AppSaml#url}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#index AppSaml#index}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#url AppSaml#url}.

---

### AppSamlAttributeStatements <a name="AppSamlAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlAttributeStatements(
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
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name">name</a></code> | <code>str</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType">filter_type</a></code> | <code>str</code> | Type of group attribute filter. Valid values are: `STARTS_WITH`, `EQUALS`, `CONTAINS`, or `REGEX`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue">filter_value</a></code> | <code>str</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace">namespace</a></code> | <code>str</code> | The attribute namespace. It can be set to `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`, `urn:oasis:names:tc:SAML:2.0:attrname-format:uri`, or `urn:oasis:names:tc:SAML:2.0:attrname-format:basic`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type">type</a></code> | <code>str</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#values AppSaml#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name"></a>

```python
name: str
```

- *Type:* str

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#name AppSaml#name}

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Type of group attribute filter. Valid values are: `STARTS_WITH`, `EQUALS`, `CONTAINS`, or `REGEX`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#filter_type AppSaml#filter_type}

---

##### `filter_value`<sup>Optional</sup> <a name="filter_value" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue"></a>

```python
filter_value: str
```

- *Type:* str

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#filter_value AppSaml#filter_value}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The attribute namespace. It can be set to `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`, `urn:oasis:names:tc:SAML:2.0:attrname-format:uri`, or `urn:oasis:names:tc:SAML:2.0:attrname-format:basic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#namespace AppSaml#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type"></a>

```python
type: str
```

- *Type:* str

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#type AppSaml#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#values AppSaml#values}.

---

### AppSamlConfig <a name="AppSamlConfig" id="@cdktf/provider-okta.appSaml.AppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
  acs_endpoints_indices: typing.Union[IResolvable, typing.List[AppSamlAcsEndpointsIndices]] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  assertion_signed: typing.Union[bool, IResolvable] = None,
  attribute_statements: typing.Union[IResolvable, typing.List[AppSamlAttributeStatements]] = None,
  audience: str = None,
  authentication_policy: str = None,
  authn_context_class_ref: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  default_relay_state: str = None,
  destination: str = None,
  digest_algorithm: str = None,
  enduser_note: str = None,
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
  saml_signed_request_enabled: typing.Union[bool, IResolvable] = None,
  saml_version: str = None,
  signature_algorithm: str = None,
  single_logout_certificate: str = None,
  single_logout_issuer: str = None,
  single_logout_url: str = None,
  sp_issuer: str = None,
  sso_url: str = None,
  status: str = None,
  subject_name_id_format: str = None,
  subject_name_id_template: str = None,
  timeouts: AppSamlTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.label">label</a></code> | <code>str</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | An array of ACS endpoints. You can configure a maximum of 100 endpoints. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpointsIndices">acs_endpoints_indices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]</code> | acs_endpoints_indices block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned">assertion_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements">attribute_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience">audience</a></code> | <code>str</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | The ID of the associated `app_signon_policy`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. Default is: `false`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState">default_relay_state</a></code> | <code>str</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination">destination</a></code> | <code>str</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn">honor_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prompt user to re-authenticate if SP asks for it. Default is: `false`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer">idp_issuer</a></code> | <code>str</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName">key_name</a></code> | <code>str</code> | Certificate name. This modulates the rotation of keys. New name == new key. Required to be set with `key_years_valid`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid">key_years_valid</a></code> | <code>typing.Union[int, float]</code> | Number of years the certificate is valid (2 - 10 years). |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo">logo</a></code> | <code>str</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Name of application from the Okta Integration Network. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient">recipient</a></code> | <code>str</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned">response_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled">saml_signed_request_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion">saml_version</a></code> | <code>str</code> | SAML version for the app's sign-on mode. Valid values are: `2.0` or `1.1`. Default is `2.0`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | Signature algorithm used to digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer">sp_issuer</a></code> | <code>str</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl">sso_url</a></code> | <code>str</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.status">status</a></code> | <code>str</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. Default: `BUILT_IN`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.label"></a>

```python
label: str
```

- *Type:* str

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#label AppSaml#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `acs_endpoints`<sup>Optional</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints"></a>

```python
acs_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

An array of ACS endpoints. You can configure a maximum of 100 endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `acs_endpoints_indices`<sup>Optional</sup> <a name="acs_endpoints_indices" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpointsIndices"></a>

```python
acs_endpoints_indices: typing.Union[IResolvable, typing.List[AppSamlAcsEndpointsIndices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]

acs_endpoints_indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#acs_endpoints_indices AppSaml#acs_endpoints_indices}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `assertion_signed`<sup>Optional</sup> <a name="assertion_signed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned"></a>

```python
assertion_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `attribute_statements`<sup>Optional</sup> <a name="attribute_statements" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements"></a>

```python
attribute_statements: typing.Union[IResolvable, typing.List[AppSamlAttributeStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#audience AppSaml#audience}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

The ID of the associated `app_signon_policy`.

If this property is removed from the application the `default` sign-on-policy will be associated with this application.y

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `authn_context_class_ref`<sup>Optional</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef"></a>

```python
authn_context_class_ref: str
```

- *Type:* str

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar. Default is: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `default_relay_state`<sup>Optional</sup> <a name="default_relay_state" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState"></a>

```python
default_relay_state: str
```

- *Type:* str

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#destination AppSaml#destination}

---

##### `digest_algorithm`<sup>Optional</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm"></a>

```python
digest_algorithm: str
```

- *Type:* str

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `honor_force_authn`<sup>Optional</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn"></a>

```python
honor_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prompt user to re-authenticate if SP asks for it. Default is: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_issuer`<sup>Optional</sup> <a name="idp_issuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer"></a>

```python
idp_issuer: str
```

- *Type:* str

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `implicit_assignment`<sup>Optional</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment"></a>

```python
implicit_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Certificate name. This modulates the rotation of keys. New name == new key. Required to be set with `key_years_valid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `key_years_valid`<sup>Optional</sup> <a name="key_years_valid" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid"></a>

```python
key_years_valid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of years the certificate is valid (2 - 10 years).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#logo AppSaml#logo}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

Name of application from the Okta Integration Network.

For instance 'slack'. If not included a custom app will be created.  If not provided the following arguments are required:
'sso_url'
'recipient'
'destination'
'audience'
'subject_name_id_template'
'subject_name_id_format'
'signature_algorithm'
'digest_algorithm'
'authn_context_class_ref'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `request_compressed`<sup>Optional</sup> <a name="request_compressed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed"></a>

```python
request_compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `response_signed`<sup>Optional</sup> <a name="response_signed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned"></a>

```python
response_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `saml_signed_request_enabled`<sup>Optional</sup> <a name="saml_signed_request_enabled" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled"></a>

```python
saml_signed_request_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `saml_version`<sup>Optional</sup> <a name="saml_version" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion"></a>

```python
saml_version: str
```

- *Type:* str

SAML version for the app's sign-on mode. Valid values are: `2.0` or `1.1`. Default is `2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

Signature algorithm used to digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `single_logout_certificate`<sup>Optional</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate"></a>

```python
single_logout_certificate: str
```

- *Type:* str

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Note: should be provided without `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`, see [official documentation](https://developer.okta.com/docs/reference/api/apps/#service-provider-certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `single_logout_issuer`<sup>Optional</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer"></a>

```python
single_logout_issuer: str
```

- *Type:* str

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `single_logout_url`<sup>Optional</sup> <a name="single_logout_url" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl"></a>

```python
single_logout_url: str
```

- *Type:* str

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `sp_issuer`<sup>Optional</sup> <a name="sp_issuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer"></a>

```python
sp_issuer: str
```

- *Type:* str

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `sso_url`<sup>Optional</sup> <a name="sso_url" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#status AppSaml#status}

---

##### `subject_name_id_format`<sup>Optional</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat"></a>

```python
subject_name_id_format: str
```

- *Type:* str

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `subject_name_id_template`<sup>Optional</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate"></a>

```python
subject_name_id_template: str
```

- *Type:* str

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts"></a>

```python
timeouts: AppSamlTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

### AppSamlKeys <a name="AppSamlKeys" id="@cdktf/provider-okta.appSaml.AppSamlKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlKeys()
```


### AppSamlTimeouts <a name="AppSamlTimeouts" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#create AppSaml#create}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#read AppSaml#read}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#update AppSaml#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#create AppSaml#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#read AppSaml#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_saml#update AppSaml#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSamlAcsEndpointsIndicesList <a name="AppSamlAcsEndpointsIndicesList" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlAcsEndpointsIndicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppSamlAcsEndpointsIndicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppSamlAcsEndpointsIndices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]]

---


### AppSamlAcsEndpointsIndicesOutputReference <a name="AppSamlAcsEndpointsIndicesOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlAcsEndpointsIndicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.indexInput">index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.indexInput"></a>

```python
index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppSamlAcsEndpointsIndices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlAcsEndpointsIndices">AppSamlAcsEndpointsIndices</a>]

---


### AppSamlAttributeStatementsList <a name="AppSamlAttributeStatementsList" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlAttributeStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppSamlAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppSamlAttributeStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]]

---


### AppSamlAttributeStatementsOutputReference <a name="AppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlAttributeStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue">reset_filter_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```

##### `reset_filter_value` <a name="reset_filter_value" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue"></a>

```python
def reset_filter_value() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput">filter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue">filter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `filter_value_input`<sup>Optional</sup> <a name="filter_value_input" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput"></a>

```python
filter_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `filter_value`<sup>Required</sup> <a name="filter_value" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```python
filter_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppSamlAttributeStatements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>]

---


### AppSamlKeysList <a name="AppSamlKeysList" id="@cdktf/provider-okta.appSaml.AppSamlKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppSamlKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AppSamlKeysOutputReference <a name="AppSamlKeysOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e">e</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty">kty</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n">n</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use">use</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C">x5_c</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256">x5_t_s256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e"></a>

```python
e: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty"></a>

```python
kty: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n"></a>

```python
n: str
```

- *Type:* str

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use"></a>

```python
use: str
```

- *Type:* str

---

##### `x5_c`<sup>Required</sup> <a name="x5_c" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C"></a>

```python
x5_c: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x5_t_s256`<sup>Required</sup> <a name="x5_t_s256" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256"></a>

```python
x5_t_s256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue"></a>

```python
internal_value: AppSamlKeys
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a>

---


### AppSamlTimeoutsOutputReference <a name="AppSamlTimeoutsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_saml

appSaml.AppSamlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppSamlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>]

---



