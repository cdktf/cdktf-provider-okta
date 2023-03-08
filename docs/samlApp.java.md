# `samlApp` Submodule <a name="`samlApp` Submodule" id="@cdktf/provider-okta.samlApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlApp <a name="SamlApp" id="@cdktf/provider-okta.samlApp.SamlApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_app okta_saml_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlApp;

SamlApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .label(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .acsEndpoints(java.util.List<java.lang.String>)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .appSettingsJson(java.lang.String)
//  .assertionSigned(java.lang.Boolean)
//  .assertionSigned(IResolvable)
//  .attributeStatements(IResolvable)
//  .attributeStatements(java.util.List<SamlAppAttributeStatements>)
//  .audience(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .authnContextClassRef(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .defaultRelayState(java.lang.String)
//  .destination(java.lang.String)
//  .digestAlgorithm(java.lang.String)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .honorForceAuthn(java.lang.Boolean)
//  .honorForceAuthn(IResolvable)
//  .id(java.lang.String)
//  .idpIssuer(java.lang.String)
//  .implicitAssignment(java.lang.Boolean)
//  .implicitAssignment(IResolvable)
//  .inlineHookId(java.lang.String)
//  .keyName(java.lang.String)
//  .keyYearsValid(java.lang.Number)
//  .logo(java.lang.String)
//  .preconfiguredApp(java.lang.String)
//  .recipient(java.lang.String)
//  .requestCompressed(java.lang.Boolean)
//  .requestCompressed(IResolvable)
//  .responseSigned(java.lang.Boolean)
//  .responseSigned(IResolvable)
//  .samlSignedRequestEnabled(java.lang.Boolean)
//  .samlSignedRequestEnabled(IResolvable)
//  .samlVersion(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .singleLogoutCertificate(java.lang.String)
//  .singleLogoutIssuer(java.lang.String)
//  .singleLogoutUrl(java.lang.String)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .spIssuer(java.lang.String)
//  .ssoUrl(java.lang.String)
//  .status(java.lang.String)
//  .subjectNameIdFormat(java.lang.String)
//  .subjectNameIdTemplate(java.lang.String)
//  .timeouts(SamlAppTimeouts)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<SamlAppUsers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.assertionSigned">assertionSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.attributeStatements">attributeStatements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>></code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.audience">audience</a></code> | <code>java.lang.String</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.honorForceAuthn">honorForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyYearsValid">keyYearsValid</a></code> | <code>java.lang.Number</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.recipient">recipient</a></code> | <code>java.lang.String</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.responseSigned">responseSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.samlVersion">samlVersion</a></code> | <code>java.lang.String</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>></code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#label SamlApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `acsEndpoints`<sup>Optional</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.acsEndpoints"></a>

- *Type:* java.util.List<java.lang.String>

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#admin_note SamlApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_links_json SamlApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.appSettingsJson"></a>

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `assertionSigned`<sup>Optional</sup> <a name="assertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.assertionSigned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `attributeStatements`<sup>Optional</sup> <a name="attributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.attributeStatements"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>>

attribute_statements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.audience"></a>

- *Type:* java.lang.String

Audience Restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#audience SamlApp#audience}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authenticationPolicy"></a>

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `authnContextClassRef`<sup>Optional</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.authnContextClassRef"></a>

- *Type:* java.lang.String

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.defaultRelayState"></a>

- *Type:* java.lang.String

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#destination SamlApp#destination}

---

##### `digestAlgorithm`<sup>Optional</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.digestAlgorithm"></a>

- *Type:* java.lang.String

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#enduser_note SamlApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#groups SamlApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_ios SamlApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_web SamlApp#hide_web}

---

##### `honorForceAuthn`<sup>Optional</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.honorForceAuthn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpIssuer`<sup>Optional</sup> <a name="idpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.idpIssuer"></a>

- *Type:* java.lang.String

SAML issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.implicitAssignment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.inlineHookId"></a>

- *Type:* java.lang.String

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_name SamlApp#key_name}

---

##### `keyYearsValid`<sup>Optional</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.keyYearsValid"></a>

- *Type:* java.lang.Number

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#logo SamlApp#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.preconfiguredApp"></a>

- *Type:* java.lang.String

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.recipient"></a>

- *Type:* java.lang.String

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#recipient SamlApp#recipient}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.requestCompressed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#request_compressed SamlApp#request_compressed}

---

##### `responseSigned`<sup>Optional</sup> <a name="responseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.responseSigned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#response_signed SamlApp#response_signed}

---

##### `samlSignedRequestEnabled`<sup>Optional</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.samlSignedRequestEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_signed_request_enabled SamlApp#saml_signed_request_enabled}

---

##### `samlVersion`<sup>Optional</sup> <a name="samlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.samlVersion"></a>

- *Type:* java.lang.String

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_version SamlApp#saml_version}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* java.lang.String

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `singleLogoutCertificate`<sup>Optional</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutCertificate"></a>

- *Type:* java.lang.String

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `singleLogoutIssuer`<sup>Optional</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutIssuer"></a>

- *Type:* java.lang.String

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `singleLogoutUrl`<sup>Optional</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.singleLogoutUrl"></a>

- *Type:* java.lang.String

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_groups SamlApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.skipUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_users SamlApp#skip_users}

---

##### `spIssuer`<sup>Optional</sup> <a name="spIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.spIssuer"></a>

- *Type:* java.lang.String

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.ssoUrl"></a>

- *Type:* java.lang.String

Single Sign On URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sso_url SamlApp#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#status SamlApp#status}

---

##### `subjectNameIdFormat`<sup>Optional</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdFormat"></a>

- *Type:* java.lang.String

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `subjectNameIdTemplate`<sup>Optional</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.subjectNameIdTemplate"></a>

- *Type:* java.lang.String

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#timeouts SamlApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template SamlApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.users"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#users SamlApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements">putAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints">resetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned">resetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements">resetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef">resetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm">resetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn">resetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer">resetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid">resetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed">resetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned">resetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled">resetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion">resetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate">resetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer">resetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl">resetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer">resetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl">resetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat">resetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate">resetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.samlApp.SamlApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAttributeStatements` <a name="putAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements"></a>

```java
public void putAttributeStatements(IResolvable OR java.util.List<SamlAppAttributeStatements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts"></a>

```java
public void putTimeouts(SamlAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers"></a>

```java
public void putUsers(IResolvable OR java.util.List<SamlAppUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAcsEndpoints` <a name="resetAcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints"></a>

```java
public void resetAcsEndpoints()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson"></a>

```java
public void resetAppSettingsJson()
```

##### `resetAssertionSigned` <a name="resetAssertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned"></a>

```java
public void resetAssertionSigned()
```

##### `resetAttributeStatements` <a name="resetAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements"></a>

```java
public void resetAttributeStatements()
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-okta.samlApp.SamlApp.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy"></a>

```java
public void resetAuthenticationPolicy()
```

##### `resetAuthnContextClassRef` <a name="resetAuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef"></a>

```java
public void resetAuthnContextClassRef()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState"></a>

```java
public void resetDefaultRelayState()
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-okta.samlApp.SamlApp.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetDigestAlgorithm` <a name="resetDigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm"></a>

```java
public void resetDigestAlgorithm()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetHonorForceAuthn` <a name="resetHonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn"></a>

```java
public void resetHonorForceAuthn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.samlApp.SamlApp.resetId"></a>

```java
public void resetId()
```

##### `resetIdpIssuer` <a name="resetIdpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer"></a>

```java
public void resetIdpIssuer()
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment"></a>

```java
public void resetImplicitAssignment()
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId"></a>

```java
public void resetInlineHookId()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetKeyYearsValid` <a name="resetKeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid"></a>

```java
public void resetKeyYearsValid()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.samlApp.SamlApp.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp"></a>

```java
public void resetPreconfiguredApp()
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktf/provider-okta.samlApp.SamlApp.resetRecipient"></a>

```java
public void resetRecipient()
```

##### `resetRequestCompressed` <a name="resetRequestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed"></a>

```java
public void resetRequestCompressed()
```

##### `resetResponseSigned` <a name="resetResponseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned"></a>

```java
public void resetResponseSigned()
```

##### `resetSamlSignedRequestEnabled` <a name="resetSamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled"></a>

```java
public void resetSamlSignedRequestEnabled()
```

##### `resetSamlVersion` <a name="resetSamlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion"></a>

```java
public void resetSamlVersion()
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm"></a>

```java
public void resetSignatureAlgorithm()
```

##### `resetSingleLogoutCertificate` <a name="resetSingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate"></a>

```java
public void resetSingleLogoutCertificate()
```

##### `resetSingleLogoutIssuer` <a name="resetSingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer"></a>

```java
public void resetSingleLogoutIssuer()
```

##### `resetSingleLogoutUrl` <a name="resetSingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl"></a>

```java
public void resetSingleLogoutUrl()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers"></a>

```java
public void resetSkipUsers()
```

##### `resetSpIssuer` <a name="resetSpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer"></a>

```java
public void resetSpIssuer()
```

##### `resetSsoUrl` <a name="resetSsoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl"></a>

```java
public void resetSsoUrl()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectNameIdFormat` <a name="resetSubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat"></a>

```java
public void resetSubjectNameIdFormat()
```

##### `resetSubjectNameIdTemplate` <a name="resetSubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate"></a>

```java
public void resetSubjectNameIdTemplate()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetUsers"></a>

```java
public void resetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlApp;

SamlApp.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlApp;

SamlApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlApp;

SamlApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements">attributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl">embedUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityKey">entityKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl">entityUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.features">features</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding">httpPostBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding">httpRedirectBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl">metadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput">acsEndpointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput">assertionSignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput">attributeStatementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput">authnContextClassRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput">digestAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput">honorForceAuthnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput">idpIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput">keyYearsValidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput">recipientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput">requestCompressedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput">responseSignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput">samlSignedRequestEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput">samlVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput">singleLogoutCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput">singleLogoutIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput">singleLogoutUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput">skipUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput">spIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput">ssoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput">subjectNameIdFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput">subjectNameIdTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.usersInput">usersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned">assertionSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn">honorForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid">keyYearsValid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipient">recipient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned">responseSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion">samlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.samlApp.SamlApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlApp.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.samlApp.SamlApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributeStatements`<sup>Required</sup> <a name="attributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements"></a>

```java
public SamlAppAttributeStatementsList getAttributeStatements();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `embedUrl`<sup>Required</sup> <a name="embedUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl"></a>

```java
public java.lang.String getEmbedUrl();
```

- *Type:* java.lang.String

---

##### `entityKey`<sup>Required</sup> <a name="entityKey" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityKey"></a>

```java
public java.lang.String getEntityKey();
```

- *Type:* java.lang.String

---

##### `entityUrl`<sup>Required</sup> <a name="entityUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl"></a>

```java
public java.lang.String getEntityUrl();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.samlApp.SamlApp.property.features"></a>

```java
public java.util.List<java.lang.String> getFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpPostBinding`<sup>Required</sup> <a name="httpPostBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding"></a>

```java
public java.lang.String getHttpPostBinding();
```

- *Type:* java.lang.String

---

##### `httpRedirectBinding`<sup>Required</sup> <a name="httpRedirectBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding"></a>

```java
public java.lang.String getHttpRedirectBinding();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-okta.samlApp.SamlApp.property.keys"></a>

```java
public SamlAppKeysList getKeys();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl"></a>

```java
public java.lang.String getMetadataUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeouts"></a>

```java
public SamlAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlApp.property.users"></a>

```java
public SamlAppUsersList getUsers();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `acsEndpointsInput`<sup>Optional</sup> <a name="acsEndpointsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput"></a>

```java
public java.util.List<java.lang.String> getAcsEndpointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput"></a>

```java
public java.lang.String getAppSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `assertionSignedInput`<sup>Optional</sup> <a name="assertionSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput"></a>

```java
public java.lang.Object getAssertionSignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attributeStatementsInput`<sup>Optional</sup> <a name="attributeStatementsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput"></a>

```java
public java.lang.Object getAttributeStatementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput"></a>

```java
public java.lang.String getAuthenticationPolicyInput();
```

- *Type:* java.lang.String

---

##### `authnContextClassRefInput`<sup>Optional</sup> <a name="authnContextClassRefInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput"></a>

```java
public java.lang.String getAuthnContextClassRefInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput"></a>

```java
public java.lang.String getDefaultRelayStateInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `digestAlgorithmInput`<sup>Optional</sup> <a name="digestAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput"></a>

```java
public java.lang.String getDigestAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `honorForceAuthnInput`<sup>Optional</sup> <a name="honorForceAuthnInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput"></a>

```java
public java.lang.Object getHonorForceAuthnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpIssuerInput`<sup>Optional</sup> <a name="idpIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput"></a>

```java
public java.lang.String getIdpIssuerInput();
```

- *Type:* java.lang.String

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput"></a>

```java
public java.lang.Object getImplicitAssignmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput"></a>

```java
public java.lang.String getInlineHookIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyYearsValidInput`<sup>Optional</sup> <a name="keyYearsValidInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput"></a>

```java
public java.lang.Number getKeyYearsValidInput();
```

- *Type:* java.lang.Number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput"></a>

```java
public java.lang.String getPreconfiguredAppInput();
```

- *Type:* java.lang.String

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput"></a>

```java
public java.lang.String getRecipientInput();
```

- *Type:* java.lang.String

---

##### `requestCompressedInput`<sup>Optional</sup> <a name="requestCompressedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput"></a>

```java
public java.lang.Object getRequestCompressedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `responseSignedInput`<sup>Optional</sup> <a name="responseSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput"></a>

```java
public java.lang.Object getResponseSignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlSignedRequestEnabledInput`<sup>Optional</sup> <a name="samlSignedRequestEnabledInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput"></a>

```java
public java.lang.Object getSamlSignedRequestEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlVersionInput`<sup>Optional</sup> <a name="samlVersionInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput"></a>

```java
public java.lang.String getSamlVersionInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `singleLogoutCertificateInput`<sup>Optional</sup> <a name="singleLogoutCertificateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput"></a>

```java
public java.lang.String getSingleLogoutCertificateInput();
```

- *Type:* java.lang.String

---

##### `singleLogoutIssuerInput`<sup>Optional</sup> <a name="singleLogoutIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput"></a>

```java
public java.lang.String getSingleLogoutIssuerInput();
```

- *Type:* java.lang.String

---

##### `singleLogoutUrlInput`<sup>Optional</sup> <a name="singleLogoutUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput"></a>

```java
public java.lang.String getSingleLogoutUrlInput();
```

- *Type:* java.lang.String

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput"></a>

```java
public java.lang.Object getSkipUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spIssuerInput`<sup>Optional</sup> <a name="spIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput"></a>

```java
public java.lang.String getSpIssuerInput();
```

- *Type:* java.lang.String

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput"></a>

```java
public java.lang.String getSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectNameIdFormatInput`<sup>Optional</sup> <a name="subjectNameIdFormatInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput"></a>

```java
public java.lang.String getSubjectNameIdFormatInput();
```

- *Type:* java.lang.String

---

##### `subjectNameIdTemplateInput`<sup>Optional</sup> <a name="subjectNameIdTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput"></a>

```java
public java.lang.String getSubjectNameIdTemplateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.usersInput"></a>

```java
public java.lang.Object getUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>>

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `acsEndpoints`<sup>Required</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints"></a>

```java
public java.util.List<java.lang.String> getAcsEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

---

##### `assertionSigned`<sup>Required</sup> <a name="assertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned"></a>

```java
public java.lang.Object getAssertionSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlApp.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

---

##### `authnContextClassRef`<sup>Required</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef"></a>

```java
public java.lang.String getAuthnContextClassRef();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlApp.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `digestAlgorithm`<sup>Required</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm"></a>

```java
public java.lang.String getDigestAlgorithm();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlApp.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `honorForceAuthn`<sup>Required</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn"></a>

```java
public java.lang.Object getHonorForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpIssuer`<sup>Required</sup> <a name="idpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer"></a>

```java
public java.lang.String getIdpIssuer();
```

- *Type:* java.lang.String

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyYearsValid`<sup>Required</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid"></a>

```java
public java.lang.Number getKeyYearsValid();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlApp.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlApp.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

---

##### `requestCompressed`<sup>Required</sup> <a name="requestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed"></a>

```java
public java.lang.Object getRequestCompressed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `responseSigned`<sup>Required</sup> <a name="responseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned"></a>

```java
public java.lang.Object getResponseSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlSignedRequestEnabled`<sup>Required</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled"></a>

```java
public java.lang.Object getSamlSignedRequestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlVersion`<sup>Required</sup> <a name="samlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion"></a>

```java
public java.lang.String getSamlVersion();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `singleLogoutCertificate`<sup>Required</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate"></a>

```java
public java.lang.String getSingleLogoutCertificate();
```

- *Type:* java.lang.String

---

##### `singleLogoutIssuer`<sup>Required</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer"></a>

```java
public java.lang.String getSingleLogoutIssuer();
```

- *Type:* java.lang.String

---

##### `singleLogoutUrl`<sup>Required</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl"></a>

```java
public java.lang.String getSingleLogoutUrl();
```

- *Type:* java.lang.String

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spIssuer`<sup>Required</sup> <a name="spIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer"></a>

```java
public java.lang.String getSpIssuer();
```

- *Type:* java.lang.String

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectNameIdFormat`<sup>Required</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat"></a>

```java
public java.lang.String getSubjectNameIdFormat();
```

- *Type:* java.lang.String

---

##### `subjectNameIdTemplate`<sup>Required</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate"></a>

```java
public java.lang.String getSubjectNameIdTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAppAttributeStatements <a name="SamlAppAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppAttributeStatements;

SamlAppAttributeStatements.builder()
    .name(java.lang.String)
//  .filterType(java.lang.String)
//  .filterValue(java.lang.String)
//  .namespace(java.lang.String)
//  .type(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name">name</a></code> | <code>java.lang.String</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue">filterValue</a></code> | <code>java.lang.String</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type">type</a></code> | <code>java.lang.String</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#name SamlApp#name}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Type of group attribute filter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_type SamlApp#filter_type}

---

##### `filterValue`<sup>Optional</sup> <a name="filterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue"></a>

```java
public java.lang.String getFilterValue();
```

- *Type:* java.lang.String

Filter value to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_value SamlApp#filter_value}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The name format of the attribute.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#namespace SamlApp#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of attribute statements object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#type SamlApp#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}.

---

### SamlAppConfig <a name="SamlAppConfig" id="@cdktf/provider-okta.samlApp.SamlAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppConfig;

SamlAppConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .label(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .acsEndpoints(java.util.List<java.lang.String>)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .appSettingsJson(java.lang.String)
//  .assertionSigned(java.lang.Boolean)
//  .assertionSigned(IResolvable)
//  .attributeStatements(IResolvable)
//  .attributeStatements(java.util.List<SamlAppAttributeStatements>)
//  .audience(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .authnContextClassRef(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .defaultRelayState(java.lang.String)
//  .destination(java.lang.String)
//  .digestAlgorithm(java.lang.String)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .honorForceAuthn(java.lang.Boolean)
//  .honorForceAuthn(IResolvable)
//  .id(java.lang.String)
//  .idpIssuer(java.lang.String)
//  .implicitAssignment(java.lang.Boolean)
//  .implicitAssignment(IResolvable)
//  .inlineHookId(java.lang.String)
//  .keyName(java.lang.String)
//  .keyYearsValid(java.lang.Number)
//  .logo(java.lang.String)
//  .preconfiguredApp(java.lang.String)
//  .recipient(java.lang.String)
//  .requestCompressed(java.lang.Boolean)
//  .requestCompressed(IResolvable)
//  .responseSigned(java.lang.Boolean)
//  .responseSigned(IResolvable)
//  .samlSignedRequestEnabled(java.lang.Boolean)
//  .samlSignedRequestEnabled(IResolvable)
//  .samlVersion(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .singleLogoutCertificate(java.lang.String)
//  .singleLogoutIssuer(java.lang.String)
//  .singleLogoutUrl(java.lang.String)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .spIssuer(java.lang.String)
//  .ssoUrl(java.lang.String)
//  .status(java.lang.String)
//  .subjectNameIdFormat(java.lang.String)
//  .subjectNameIdTemplate(java.lang.String)
//  .timeouts(SamlAppTimeouts)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<SamlAppUsers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned">assertionSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements">attributeStatements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>></code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn">honorForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid">keyYearsValid</a></code> | <code>java.lang.Number</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient">recipient</a></code> | <code>java.lang.String</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned">responseSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion">samlVersion</a></code> | <code>java.lang.String</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>></code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#label SamlApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `acsEndpoints`<sup>Optional</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints"></a>

```java
public java.util.List<java.lang.String> getAcsEndpoints();
```

- *Type:* java.util.List<java.lang.String>

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#admin_note SamlApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_links_json SamlApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `assertionSigned`<sup>Optional</sup> <a name="assertionSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned"></a>

```java
public java.lang.Object getAssertionSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `attributeStatements`<sup>Optional</sup> <a name="attributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements"></a>

```java
public java.lang.Object getAttributeStatements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>>

attribute_statements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience Restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#audience SamlApp#audience}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `authnContextClassRef`<sup>Optional</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef"></a>

```java
public java.lang.String getAuthnContextClassRef();
```

- *Type:* java.lang.String

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#destination SamlApp#destination}

---

##### `digestAlgorithm`<sup>Optional</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm"></a>

```java
public java.lang.String getDigestAlgorithm();
```

- *Type:* java.lang.String

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#enduser_note SamlApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#groups SamlApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_ios SamlApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_web SamlApp#hide_web}

---

##### `honorForceAuthn`<sup>Optional</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn"></a>

```java
public java.lang.Object getHonorForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpIssuer`<sup>Optional</sup> <a name="idpIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer"></a>

```java
public java.lang.String getIdpIssuer();
```

- *Type:* java.lang.String

SAML issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_name SamlApp#key_name}

---

##### `keyYearsValid`<sup>Optional</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid"></a>

```java
public java.lang.Number getKeyYearsValid();
```

- *Type:* java.lang.Number

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#logo SamlApp#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#recipient SamlApp#recipient}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed"></a>

```java
public java.lang.Object getRequestCompressed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#request_compressed SamlApp#request_compressed}

---

##### `responseSigned`<sup>Optional</sup> <a name="responseSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned"></a>

```java
public java.lang.Object getResponseSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#response_signed SamlApp#response_signed}

---

##### `samlSignedRequestEnabled`<sup>Optional</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled"></a>

```java
public java.lang.Object getSamlSignedRequestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_signed_request_enabled SamlApp#saml_signed_request_enabled}

---

##### `samlVersion`<sup>Optional</sup> <a name="samlVersion" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion"></a>

```java
public java.lang.String getSamlVersion();
```

- *Type:* java.lang.String

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_version SamlApp#saml_version}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `singleLogoutCertificate`<sup>Optional</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate"></a>

```java
public java.lang.String getSingleLogoutCertificate();
```

- *Type:* java.lang.String

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `singleLogoutIssuer`<sup>Optional</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer"></a>

```java
public java.lang.String getSingleLogoutIssuer();
```

- *Type:* java.lang.String

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `singleLogoutUrl`<sup>Optional</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl"></a>

```java
public java.lang.String getSingleLogoutUrl();
```

- *Type:* java.lang.String

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_groups SamlApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_users SamlApp#skip_users}

---

##### `spIssuer`<sup>Optional</sup> <a name="spIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer"></a>

```java
public java.lang.String getSpIssuer();
```

- *Type:* java.lang.String

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

Single Sign On URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sso_url SamlApp#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#status SamlApp#status}

---

##### `subjectNameIdFormat`<sup>Optional</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat"></a>

```java
public java.lang.String getSubjectNameIdFormat();
```

- *Type:* java.lang.String

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `subjectNameIdTemplate`<sup>Optional</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate"></a>

```java
public java.lang.String getSubjectNameIdTemplate();
```

- *Type:* java.lang.String

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts"></a>

```java
public SamlAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#timeouts SamlApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template SamlApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.users"></a>

```java
public java.lang.Object getUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#users SamlApp#users}

---

### SamlAppKeys <a name="SamlAppKeys" id="@cdktf/provider-okta.samlApp.SamlAppKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppKeys;

SamlAppKeys.builder()
    .build();
```


### SamlAppTimeouts <a name="SamlAppTimeouts" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppTimeouts;

SamlAppTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#create SamlApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#read SamlApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#update SamlApp#update}.

---

### SamlAppUsers <a name="SamlAppUsers" id="@cdktf/provider-okta.samlApp.SamlAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppUsers;

SamlAppUsers.builder()
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.id">id</a></code> | <code>java.lang.String</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.password">password</a></code> | <code>java.lang.String</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.username">username</a></code> | <code>java.lang.String</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#password SamlApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#username SamlApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAppAttributeStatementsList <a name="SamlAppAttributeStatementsList" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppAttributeStatementsList;

new SamlAppAttributeStatementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get"></a>

```java
public SamlAppAttributeStatementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a>>

---


### SamlAppAttributeStatementsOutputReference <a name="SamlAppAttributeStatementsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppAttributeStatementsOutputReference;

new SamlAppAttributeStatementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue">resetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetFilterValue` <a name="resetFilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue"></a>

```java
public void resetFilterValue()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput">filterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue">filterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `filterValueInput`<sup>Optional</sup> <a name="filterValueInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput"></a>

```java
public java.lang.String getFilterValueInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `filterValue`<sup>Required</sup> <a name="filterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue"></a>

```java
public java.lang.String getFilterValue();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements">SamlAppAttributeStatements</a> OR com.hashicorp.cdktf.IResolvable

---


### SamlAppKeysList <a name="SamlAppKeysList" id="@cdktf/provider-okta.samlApp.SamlAppKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppKeysList;

new SamlAppKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get"></a>

```java
public SamlAppKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SamlAppKeysOutputReference <a name="SamlAppKeysOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppKeysOutputReference;

new SamlAppKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty">kty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use">use</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C">x5C</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256">x5TS256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

---

##### `x5C`<sup>Required</sup> <a name="x5C" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C"></a>

```java
public java.util.List<java.lang.String> getX5C();
```

- *Type:* java.util.List<java.lang.String>

---

##### `x5TS256`<sup>Required</sup> <a name="x5TS256" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256"></a>

```java
public java.lang.String getX5TS256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue"></a>

```java
public SamlAppKeys getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a>

---


### SamlAppTimeoutsOutputReference <a name="SamlAppTimeoutsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppTimeoutsOutputReference;

new SamlAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### SamlAppUsersList <a name="SamlAppUsersList" id="@cdktf/provider-okta.samlApp.SamlAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppUsersList;

new SamlAppUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get"></a>

```java
public SamlAppUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a>>

---


### SamlAppUsersOutputReference <a name="SamlAppUsersOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.saml_app.SamlAppUsersOutputReference;

new SamlAppUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsers">SamlAppUsers</a> OR com.hashicorp.cdktf.IResolvable

---



