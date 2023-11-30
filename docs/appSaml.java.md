# `appSaml` Submodule <a name="`appSaml` Submodule" id="@cdktf/provider-okta.appSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSaml <a name="AppSaml" id="@cdktf/provider-okta.appSaml.AppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSaml;

AppSaml.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
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
//  .attributeStatements(java.util.List<AppSamlAttributeStatements>)
//  .audience(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .authnContextClassRef(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .defaultRelayState(java.lang.String)
//  .destination(java.lang.String)
//  .digestAlgorithm(java.lang.String)
//  .enduserNote(java.lang.String)
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
//  .spIssuer(java.lang.String)
//  .ssoUrl(java.lang.String)
//  .status(java.lang.String)
//  .subjectNameIdFormat(java.lang.String)
//  .subjectNameIdTemplate(java.lang.String)
//  .timeouts(AppSamlTimeouts)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.assertionSigned">assertionSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.attributeStatements">attributeStatements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>></code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.audience">audience</a></code> | <code>java.lang.String</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.honorForceAuthn">honorForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyYearsValid">keyYearsValid</a></code> | <code>java.lang.Number</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.recipient">recipient</a></code> | <code>java.lang.String</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.responseSigned">responseSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlVersion">samlVersion</a></code> | <code>java.lang.String</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#label AppSaml#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `acsEndpoints`<sup>Optional</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.acsEndpoints"></a>

- *Type:* java.util.List<java.lang.String>

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.appSettingsJson"></a>

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `assertionSigned`<sup>Optional</sup> <a name="assertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.assertionSigned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `attributeStatements`<sup>Optional</sup> <a name="attributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.attributeStatements"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>>

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.audience"></a>

- *Type:* java.lang.String

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#audience AppSaml#audience}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authenticationPolicy"></a>

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `authnContextClassRef`<sup>Optional</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.authnContextClassRef"></a>

- *Type:* java.lang.String

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.defaultRelayState"></a>

- *Type:* java.lang.String

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#destination AppSaml#destination}

---

##### `digestAlgorithm`<sup>Optional</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.digestAlgorithm"></a>

- *Type:* java.lang.String

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `honorForceAuthn`<sup>Optional</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.honorForceAuthn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpIssuer`<sup>Optional</sup> <a name="idpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.idpIssuer"></a>

- *Type:* java.lang.String

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.implicitAssignment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.inlineHookId"></a>

- *Type:* java.lang.String

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `keyYearsValid`<sup>Optional</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.keyYearsValid"></a>

- *Type:* java.lang.Number

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#logo AppSaml#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.preconfiguredApp"></a>

- *Type:* java.lang.String

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.recipient"></a>

- *Type:* java.lang.String

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.requestCompressed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `responseSigned`<sup>Optional</sup> <a name="responseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.responseSigned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `samlSignedRequestEnabled`<sup>Optional</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlSignedRequestEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `samlVersion`<sup>Optional</sup> <a name="samlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.samlVersion"></a>

- *Type:* java.lang.String

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* java.lang.String

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `singleLogoutCertificate`<sup>Optional</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutCertificate"></a>

- *Type:* java.lang.String

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `singleLogoutIssuer`<sup>Optional</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutIssuer"></a>

- *Type:* java.lang.String

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `singleLogoutUrl`<sup>Optional</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.singleLogoutUrl"></a>

- *Type:* java.lang.String

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `spIssuer`<sup>Optional</sup> <a name="spIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.spIssuer"></a>

- *Type:* java.lang.String

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.ssoUrl"></a>

- *Type:* java.lang.String

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#status AppSaml#status}

---

##### `subjectNameIdFormat`<sup>Optional</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdFormat"></a>

- *Type:* java.lang.String

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `subjectNameIdTemplate`<sup>Optional</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.subjectNameIdTemplate"></a>

- *Type:* java.lang.String

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements">putAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints">resetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned">resetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements">resetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef">resetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm">resetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn">resetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer">resetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid">resetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed">resetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned">resetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled">resetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion">resetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate">resetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer">resetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl">resetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer">resetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl">resetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat">resetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate">resetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSaml.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSaml.AppSaml.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAttributeStatements` <a name="putAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements"></a>

```java
public void putAttributeStatements(IResolvable OR java.util.List<AppSamlAttributeStatements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts"></a>

```java
public void putTimeouts(AppSamlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAcsEndpoints` <a name="resetAcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints"></a>

```java
public void resetAcsEndpoints()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson"></a>

```java
public void resetAppSettingsJson()
```

##### `resetAssertionSigned` <a name="resetAssertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned"></a>

```java
public void resetAssertionSigned()
```

##### `resetAttributeStatements` <a name="resetAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements"></a>

```java
public void resetAttributeStatements()
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-okta.appSaml.AppSaml.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy"></a>

```java
public void resetAuthenticationPolicy()
```

##### `resetAuthnContextClassRef` <a name="resetAuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef"></a>

```java
public void resetAuthnContextClassRef()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState"></a>

```java
public void resetDefaultRelayState()
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-okta.appSaml.AppSaml.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetDigestAlgorithm` <a name="resetDigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm"></a>

```java
public void resetDigestAlgorithm()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetHonorForceAuthn` <a name="resetHonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn"></a>

```java
public void resetHonorForceAuthn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSaml.AppSaml.resetId"></a>

```java
public void resetId()
```

##### `resetIdpIssuer` <a name="resetIdpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer"></a>

```java
public void resetIdpIssuer()
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment"></a>

```java
public void resetImplicitAssignment()
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId"></a>

```java
public void resetInlineHookId()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetKeyYearsValid` <a name="resetKeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid"></a>

```java
public void resetKeyYearsValid()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appSaml.AppSaml.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp"></a>

```java
public void resetPreconfiguredApp()
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktf/provider-okta.appSaml.AppSaml.resetRecipient"></a>

```java
public void resetRecipient()
```

##### `resetRequestCompressed` <a name="resetRequestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed"></a>

```java
public void resetRequestCompressed()
```

##### `resetResponseSigned` <a name="resetResponseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned"></a>

```java
public void resetResponseSigned()
```

##### `resetSamlSignedRequestEnabled` <a name="resetSamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled"></a>

```java
public void resetSamlSignedRequestEnabled()
```

##### `resetSamlVersion` <a name="resetSamlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion"></a>

```java
public void resetSamlVersion()
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm"></a>

```java
public void resetSignatureAlgorithm()
```

##### `resetSingleLogoutCertificate` <a name="resetSingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate"></a>

```java
public void resetSingleLogoutCertificate()
```

##### `resetSingleLogoutIssuer` <a name="resetSingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer"></a>

```java
public void resetSingleLogoutIssuer()
```

##### `resetSingleLogoutUrl` <a name="resetSingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl"></a>

```java
public void resetSingleLogoutUrl()
```

##### `resetSpIssuer` <a name="resetSpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer"></a>

```java
public void resetSpIssuer()
```

##### `resetSsoUrl` <a name="resetSsoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl"></a>

```java
public void resetSsoUrl()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSubjectNameIdFormat` <a name="resetSubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat"></a>

```java
public void resetSubjectNameIdFormat()
```

##### `resetSubjectNameIdTemplate` <a name="resetSubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate"></a>

```java
public void resetSubjectNameIdTemplate()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSaml;

AppSaml.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSaml;

AppSaml.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSaml;

AppSaml.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSaml;

AppSaml.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppSaml.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements">attributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl">embedUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityKey">entityKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl">entityUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.features">features</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding">httpPostBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding">httpRedirectBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl">metadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput">acsEndpointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput">assertionSignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput">attributeStatementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput">authnContextClassRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput">digestAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput">honorForceAuthnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput">idpIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput">keyYearsValidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput">recipientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput">requestCompressedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput">responseSignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput">samlSignedRequestEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput">samlVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput">singleLogoutCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput">singleLogoutIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput">singleLogoutUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput">spIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput">ssoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput">subjectNameIdFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput">subjectNameIdTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned">assertionSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn">honorForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid">keyYearsValid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipient">recipient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned">responseSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion">samlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSaml.AppSaml.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSaml.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSaml.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSaml.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSaml.AppSaml.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributeStatements`<sup>Required</sup> <a name="attributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements"></a>

```java
public AppSamlAttributeStatementsList getAttributeStatements();
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `embedUrl`<sup>Required</sup> <a name="embedUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl"></a>

```java
public java.lang.String getEmbedUrl();
```

- *Type:* java.lang.String

---

##### `entityKey`<sup>Required</sup> <a name="entityKey" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityKey"></a>

```java
public java.lang.String getEntityKey();
```

- *Type:* java.lang.String

---

##### `entityUrl`<sup>Required</sup> <a name="entityUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl"></a>

```java
public java.lang.String getEntityUrl();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.appSaml.AppSaml.property.features"></a>

```java
public java.util.List<java.lang.String> getFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpPostBinding`<sup>Required</sup> <a name="httpPostBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding"></a>

```java
public java.lang.String getHttpPostBinding();
```

- *Type:* java.lang.String

---

##### `httpRedirectBinding`<sup>Required</sup> <a name="httpRedirectBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding"></a>

```java
public java.lang.String getHttpRedirectBinding();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-okta.appSaml.AppSaml.property.keys"></a>

```java
public AppSamlKeysList getKeys();
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl"></a>

```java
public java.lang.String getMetadataUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSaml.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeouts"></a>

```java
public AppSamlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `acsEndpointsInput`<sup>Optional</sup> <a name="acsEndpointsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput"></a>

```java
public java.util.List<java.lang.String> getAcsEndpointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput"></a>

```java
public java.lang.String getAppSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `assertionSignedInput`<sup>Optional</sup> <a name="assertionSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput"></a>

```java
public java.lang.Object getAssertionSignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attributeStatementsInput`<sup>Optional</sup> <a name="attributeStatementsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput"></a>

```java
public java.lang.Object getAttributeStatementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput"></a>

```java
public java.lang.String getAuthenticationPolicyInput();
```

- *Type:* java.lang.String

---

##### `authnContextClassRefInput`<sup>Optional</sup> <a name="authnContextClassRefInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput"></a>

```java
public java.lang.String getAuthnContextClassRefInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput"></a>

```java
public java.lang.String getDefaultRelayStateInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `digestAlgorithmInput`<sup>Optional</sup> <a name="digestAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput"></a>

```java
public java.lang.String getDigestAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `honorForceAuthnInput`<sup>Optional</sup> <a name="honorForceAuthnInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput"></a>

```java
public java.lang.Object getHonorForceAuthnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpIssuerInput`<sup>Optional</sup> <a name="idpIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput"></a>

```java
public java.lang.String getIdpIssuerInput();
```

- *Type:* java.lang.String

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput"></a>

```java
public java.lang.Object getImplicitAssignmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput"></a>

```java
public java.lang.String getInlineHookIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyYearsValidInput`<sup>Optional</sup> <a name="keyYearsValidInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput"></a>

```java
public java.lang.Number getKeyYearsValidInput();
```

- *Type:* java.lang.Number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput"></a>

```java
public java.lang.String getPreconfiguredAppInput();
```

- *Type:* java.lang.String

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput"></a>

```java
public java.lang.String getRecipientInput();
```

- *Type:* java.lang.String

---

##### `requestCompressedInput`<sup>Optional</sup> <a name="requestCompressedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput"></a>

```java
public java.lang.Object getRequestCompressedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `responseSignedInput`<sup>Optional</sup> <a name="responseSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput"></a>

```java
public java.lang.Object getResponseSignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlSignedRequestEnabledInput`<sup>Optional</sup> <a name="samlSignedRequestEnabledInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput"></a>

```java
public java.lang.Object getSamlSignedRequestEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlVersionInput`<sup>Optional</sup> <a name="samlVersionInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput"></a>

```java
public java.lang.String getSamlVersionInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `singleLogoutCertificateInput`<sup>Optional</sup> <a name="singleLogoutCertificateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput"></a>

```java
public java.lang.String getSingleLogoutCertificateInput();
```

- *Type:* java.lang.String

---

##### `singleLogoutIssuerInput`<sup>Optional</sup> <a name="singleLogoutIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput"></a>

```java
public java.lang.String getSingleLogoutIssuerInput();
```

- *Type:* java.lang.String

---

##### `singleLogoutUrlInput`<sup>Optional</sup> <a name="singleLogoutUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput"></a>

```java
public java.lang.String getSingleLogoutUrlInput();
```

- *Type:* java.lang.String

---

##### `spIssuerInput`<sup>Optional</sup> <a name="spIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput"></a>

```java
public java.lang.String getSpIssuerInput();
```

- *Type:* java.lang.String

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput"></a>

```java
public java.lang.String getSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `subjectNameIdFormatInput`<sup>Optional</sup> <a name="subjectNameIdFormatInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput"></a>

```java
public java.lang.String getSubjectNameIdFormatInput();
```

- *Type:* java.lang.String

---

##### `subjectNameIdTemplateInput`<sup>Optional</sup> <a name="subjectNameIdTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput"></a>

```java
public java.lang.String getSubjectNameIdTemplateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `acsEndpoints`<sup>Required</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints"></a>

```java
public java.util.List<java.lang.String> getAcsEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

---

##### `assertionSigned`<sup>Required</sup> <a name="assertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned"></a>

```java
public java.lang.Object getAssertionSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSaml.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

---

##### `authnContextClassRef`<sup>Required</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef"></a>

```java
public java.lang.String getAuthnContextClassRef();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSaml.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `digestAlgorithm`<sup>Required</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm"></a>

```java
public java.lang.String getDigestAlgorithm();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `honorForceAuthn`<sup>Required</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn"></a>

```java
public java.lang.Object getHonorForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpIssuer`<sup>Required</sup> <a name="idpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer"></a>

```java
public java.lang.String getIdpIssuer();
```

- *Type:* java.lang.String

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyYearsValid`<sup>Required</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid"></a>

```java
public java.lang.Number getKeyYearsValid();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSaml.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSaml.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

---

##### `requestCompressed`<sup>Required</sup> <a name="requestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed"></a>

```java
public java.lang.Object getRequestCompressed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `responseSigned`<sup>Required</sup> <a name="responseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned"></a>

```java
public java.lang.Object getResponseSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlSignedRequestEnabled`<sup>Required</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled"></a>

```java
public java.lang.Object getSamlSignedRequestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samlVersion`<sup>Required</sup> <a name="samlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion"></a>

```java
public java.lang.String getSamlVersion();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `singleLogoutCertificate`<sup>Required</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate"></a>

```java
public java.lang.String getSingleLogoutCertificate();
```

- *Type:* java.lang.String

---

##### `singleLogoutIssuer`<sup>Required</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer"></a>

```java
public java.lang.String getSingleLogoutIssuer();
```

- *Type:* java.lang.String

---

##### `singleLogoutUrl`<sup>Required</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl"></a>

```java
public java.lang.String getSingleLogoutUrl();
```

- *Type:* java.lang.String

---

##### `spIssuer`<sup>Required</sup> <a name="spIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer"></a>

```java
public java.lang.String getSpIssuer();
```

- *Type:* java.lang.String

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSaml.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectNameIdFormat`<sup>Required</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat"></a>

```java
public java.lang.String getSubjectNameIdFormat();
```

- *Type:* java.lang.String

---

##### `subjectNameIdTemplate`<sup>Required</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate"></a>

```java
public java.lang.String getSubjectNameIdTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppSamlAttributeStatements <a name="AppSamlAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlAttributeStatements;

AppSamlAttributeStatements.builder()
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
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name">name</a></code> | <code>java.lang.String</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue">filterValue</a></code> | <code>java.lang.String</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type">type</a></code> | <code>java.lang.String</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#values AppSaml#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#name AppSaml#name}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Type of group attribute filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#filter_type AppSaml#filter_type}

---

##### `filterValue`<sup>Optional</sup> <a name="filterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue"></a>

```java
public java.lang.String getFilterValue();
```

- *Type:* java.lang.String

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#filter_value AppSaml#filter_value}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The name format of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#namespace AppSaml#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#type AppSaml#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#values AppSaml#values}.

---

### AppSamlConfig <a name="AppSamlConfig" id="@cdktf/provider-okta.appSaml.AppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlConfig;

AppSamlConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
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
//  .attributeStatements(java.util.List<AppSamlAttributeStatements>)
//  .audience(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .authnContextClassRef(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .defaultRelayState(java.lang.String)
//  .destination(java.lang.String)
//  .digestAlgorithm(java.lang.String)
//  .enduserNote(java.lang.String)
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
//  .spIssuer(java.lang.String)
//  .ssoUrl(java.lang.String)
//  .status(java.lang.String)
//  .subjectNameIdFormat(java.lang.String)
//  .subjectNameIdTemplate(java.lang.String)
//  .timeouts(AppSamlTimeouts)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned">assertionSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements">attributeStatements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>></code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn">honorForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid">keyYearsValid</a></code> | <code>java.lang.Number</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient">recipient</a></code> | <code>java.lang.String</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned">responseSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion">samlVersion</a></code> | <code>java.lang.String</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#label AppSaml#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `acsEndpoints`<sup>Optional</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints"></a>

```java
public java.util.List<java.lang.String> getAcsEndpoints();
```

- *Type:* java.util.List<java.lang.String>

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `assertionSigned`<sup>Optional</sup> <a name="assertionSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned"></a>

```java
public java.lang.Object getAssertionSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `attributeStatements`<sup>Optional</sup> <a name="attributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements"></a>

```java
public java.lang.Object getAttributeStatements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>>

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#audience AppSaml#audience}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `authnContextClassRef`<sup>Optional</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef"></a>

```java
public java.lang.String getAuthnContextClassRef();
```

- *Type:* java.lang.String

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#destination AppSaml#destination}

---

##### `digestAlgorithm`<sup>Optional</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm"></a>

```java
public java.lang.String getDigestAlgorithm();
```

- *Type:* java.lang.String

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `honorForceAuthn`<sup>Optional</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn"></a>

```java
public java.lang.Object getHonorForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpIssuer`<sup>Optional</sup> <a name="idpIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer"></a>

```java
public java.lang.String getIdpIssuer();
```

- *Type:* java.lang.String

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `keyYearsValid`<sup>Optional</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid"></a>

```java
public java.lang.Number getKeyYearsValid();
```

- *Type:* java.lang.Number

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#logo AppSaml#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed"></a>

```java
public java.lang.Object getRequestCompressed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `responseSigned`<sup>Optional</sup> <a name="responseSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned"></a>

```java
public java.lang.Object getResponseSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `samlSignedRequestEnabled`<sup>Optional</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled"></a>

```java
public java.lang.Object getSamlSignedRequestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `samlVersion`<sup>Optional</sup> <a name="samlVersion" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion"></a>

```java
public java.lang.String getSamlVersion();
```

- *Type:* java.lang.String

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `singleLogoutCertificate`<sup>Optional</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate"></a>

```java
public java.lang.String getSingleLogoutCertificate();
```

- *Type:* java.lang.String

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `singleLogoutIssuer`<sup>Optional</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer"></a>

```java
public java.lang.String getSingleLogoutIssuer();
```

- *Type:* java.lang.String

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `singleLogoutUrl`<sup>Optional</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl"></a>

```java
public java.lang.String getSingleLogoutUrl();
```

- *Type:* java.lang.String

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `spIssuer`<sup>Optional</sup> <a name="spIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer"></a>

```java
public java.lang.String getSpIssuer();
```

- *Type:* java.lang.String

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#status AppSaml#status}

---

##### `subjectNameIdFormat`<sup>Optional</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat"></a>

```java
public java.lang.String getSubjectNameIdFormat();
```

- *Type:* java.lang.String

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `subjectNameIdTemplate`<sup>Optional</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate"></a>

```java
public java.lang.String getSubjectNameIdTemplate();
```

- *Type:* java.lang.String

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts"></a>

```java
public AppSamlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

### AppSamlKeys <a name="AppSamlKeys" id="@cdktf/provider-okta.appSaml.AppSamlKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlKeys;

AppSamlKeys.builder()
    .build();
```


### AppSamlTimeouts <a name="AppSamlTimeouts" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlTimeouts;

AppSamlTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#create AppSaml#create}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#read AppSaml#read}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#update AppSaml#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#create AppSaml#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#read AppSaml#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_saml#update AppSaml#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSamlAttributeStatementsList <a name="AppSamlAttributeStatementsList" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlAttributeStatementsList;

new AppSamlAttributeStatementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get"></a>

```java
public AppSamlAttributeStatementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>>

---


### AppSamlAttributeStatementsOutputReference <a name="AppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlAttributeStatementsOutputReference;

new AppSamlAttributeStatementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue">resetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetFilterValue` <a name="resetFilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue"></a>

```java
public void resetFilterValue()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput">filterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue">filterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `filterValueInput`<sup>Optional</sup> <a name="filterValueInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput"></a>

```java
public java.lang.String getFilterValueInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `filterValue`<sup>Required</sup> <a name="filterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```java
public java.lang.String getFilterValue();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>

---


### AppSamlKeysList <a name="AppSamlKeysList" id="@cdktf/provider-okta.appSaml.AppSamlKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlKeysList;

new AppSamlKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get"></a>

```java
public AppSamlKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AppSamlKeysOutputReference <a name="AppSamlKeysOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlKeysOutputReference;

new AppSamlKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty">kty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use">use</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C">x5C</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256">x5TS256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use"></a>

```java
public java.lang.String getUse();
```

- *Type:* java.lang.String

---

##### `x5C`<sup>Required</sup> <a name="x5C" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C"></a>

```java
public java.util.List<java.lang.String> getX5C();
```

- *Type:* java.util.List<java.lang.String>

---

##### `x5TS256`<sup>Required</sup> <a name="x5TS256" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256"></a>

```java
public java.lang.String getX5TS256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue"></a>

```java
public AppSamlKeys getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a>

---


### AppSamlTimeoutsOutputReference <a name="AppSamlTimeoutsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_saml.AppSamlTimeoutsOutputReference;

new AppSamlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---



