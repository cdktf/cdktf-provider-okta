# `policyMfa` Submodule <a name="`policyMfa` Submodule" id="@cdktf/provider-okta.policyMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfa <a name="PolicyMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa okta_policy_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa.PolicyMfa;

PolicyMfa.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .duo(java.util.Map<java.lang.String, java.lang.String>)
//  .externalIdp(java.util.Map<java.lang.String, java.lang.String>)
//  .externalIdps(IResolvable)
//  .externalIdps(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .fidoU2F(java.util.Map<java.lang.String, java.lang.String>)
//  .fidoWebauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .googleOtp(java.util.Map<java.lang.String, java.lang.String>)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .hotp(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isOie(java.lang.Boolean)
//  .isOie(IResolvable)
//  .oktaCall(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaEmail(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaOtp(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaPassword(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaPush(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaQuestion(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaSms(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaVerify(java.util.Map<java.lang.String, java.lang.String>)
//  .onpremMfa(java.util.Map<java.lang.String, java.lang.String>)
//  .phoneNumber(java.util.Map<java.lang.String, java.lang.String>)
//  .priority(java.lang.Number)
//  .rsaToken(java.util.Map<java.lang.String, java.lang.String>)
//  .securityQuestion(java.util.Map<java.lang.String, java.lang.String>)
//  .status(java.lang.String)
//  .symantecVip(java.util.Map<java.lang.String, java.lang.String>)
//  .webauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .yubikeyToken(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#duo PolicyMfa#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.externalIdps">externalIdps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idps PolicyMfa#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#hotp PolicyMfa#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#id PolicyMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#security_question PolicyMfa#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#name PolicyMfa#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#description PolicyMfa#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.duo"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#duo PolicyMfa#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.externalIdp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}.

---

##### `externalIdps`<sup>Optional</sup> <a name="externalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.externalIdps"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idps PolicyMfa#external_idps}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.fidoU2F"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.fidoWebauthn"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.googleOtp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}.

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.groupsIncluded"></a>

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#groups_included PolicyMfa#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.hotp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#hotp PolicyMfa#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#id PolicyMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.isOie"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#is_oie PolicyMfa#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaCall"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaEmail"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaOtp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaPassword"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaPush"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaQuestion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaSms"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.oktaVerify"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.onpremMfa"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.phoneNumber"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#priority PolicyMfa#priority}

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.rsaToken"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.securityQuestion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#security_question PolicyMfa#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#status PolicyMfa#status}

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.symantecVip"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.webauthn"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.yubikeyToken"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo">resetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp">resetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdps">resetExternalIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F">resetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn">resetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp">resetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp">resetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie">resetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall">resetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail">resetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp">resetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword">resetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush">resetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion">resetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms">resetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify">resetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa">resetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken">resetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion">resetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip">resetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn">resetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken">resetYubikeyToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyMfa.PolicyMfa.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDuo` <a name="resetDuo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo"></a>

```java
public void resetDuo()
```

##### `resetExternalIdp` <a name="resetExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp"></a>

```java
public void resetExternalIdp()
```

##### `resetExternalIdps` <a name="resetExternalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdps"></a>

```java
public void resetExternalIdps()
```

##### `resetFidoU2F` <a name="resetFidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F"></a>

```java
public void resetFidoU2F()
```

##### `resetFidoWebauthn` <a name="resetFidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn"></a>

```java
public void resetFidoWebauthn()
```

##### `resetGoogleOtp` <a name="resetGoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp"></a>

```java
public void resetGoogleOtp()
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded"></a>

```java
public void resetGroupsIncluded()
```

##### `resetHotp` <a name="resetHotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp"></a>

```java
public void resetHotp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetId"></a>

```java
public void resetId()
```

##### `resetIsOie` <a name="resetIsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie"></a>

```java
public void resetIsOie()
```

##### `resetOktaCall` <a name="resetOktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall"></a>

```java
public void resetOktaCall()
```

##### `resetOktaEmail` <a name="resetOktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail"></a>

```java
public void resetOktaEmail()
```

##### `resetOktaOtp` <a name="resetOktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp"></a>

```java
public void resetOktaOtp()
```

##### `resetOktaPassword` <a name="resetOktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword"></a>

```java
public void resetOktaPassword()
```

##### `resetOktaPush` <a name="resetOktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush"></a>

```java
public void resetOktaPush()
```

##### `resetOktaQuestion` <a name="resetOktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion"></a>

```java
public void resetOktaQuestion()
```

##### `resetOktaSms` <a name="resetOktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms"></a>

```java
public void resetOktaSms()
```

##### `resetOktaVerify` <a name="resetOktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify"></a>

```java
public void resetOktaVerify()
```

##### `resetOnpremMfa` <a name="resetOnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa"></a>

```java
public void resetOnpremMfa()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRsaToken` <a name="resetRsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken"></a>

```java
public void resetRsaToken()
```

##### `resetSecurityQuestion` <a name="resetSecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion"></a>

```java
public void resetSecurityQuestion()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSymantecVip` <a name="resetSymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip"></a>

```java
public void resetSymantecVip()
```

##### `resetWebauthn` <a name="resetWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn"></a>

```java
public void resetWebauthn()
```

##### `resetYubikeyToken` <a name="resetYubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken"></a>

```java
public void resetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyMfa resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa.PolicyMfa;

PolicyMfa.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa.PolicyMfa;

PolicyMfa.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa.PolicyMfa;

PolicyMfa.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa.PolicyMfa;

PolicyMfa.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyMfa.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyMfa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyMfa to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyMfa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyMfa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput">duoInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput">externalIdpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpsInput">externalIdpsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput">fidoU2FInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput">fidoWebauthnInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput">googleOtpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput">hotpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput">isOieInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput">oktaCallInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput">oktaEmailInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput">oktaOtpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput">oktaPasswordInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput">oktaPushInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput">oktaQuestionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput">oktaSmsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput">oktaVerifyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput">onpremMfaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput">rsaTokenInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput">securityQuestionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput">symantecVipInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput">webauthnInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput">yubikeyTokenInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdps">externalIdps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `duoInput`<sup>Optional</sup> <a name="duoInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuoInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdpInput`<sup>Optional</sup> <a name="externalIdpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdpsInput`<sup>Optional</sup> <a name="externalIdpsInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpsInput"></a>

```java
public java.lang.Object getExternalIdpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `fidoU2FInput`<sup>Optional</sup> <a name="fidoU2FInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2FInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoWebauthnInput`<sup>Optional</sup> <a name="fidoWebauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthnInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `googleOtpInput`<sup>Optional</sup> <a name="googleOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput"></a>

```java
public java.util.List<java.lang.String> getGroupsIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hotpInput`<sup>Optional</sup> <a name="hotpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isOieInput`<sup>Optional</sup> <a name="isOieInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput"></a>

```java
public java.lang.Object getIsOieInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oktaCallInput`<sup>Optional</sup> <a name="oktaCallInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCallInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaEmailInput`<sup>Optional</sup> <a name="oktaEmailInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmailInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaOtpInput`<sup>Optional</sup> <a name="oktaOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPasswordInput`<sup>Optional</sup> <a name="oktaPasswordInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPasswordInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPushInput`<sup>Optional</sup> <a name="oktaPushInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPushInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaQuestionInput`<sup>Optional</sup> <a name="oktaQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaSmsInput`<sup>Optional</sup> <a name="oktaSmsInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSmsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaVerifyInput`<sup>Optional</sup> <a name="oktaVerifyInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerifyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onpremMfaInput`<sup>Optional</sup> <a name="onpremMfaInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumberInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rsaTokenInput`<sup>Optional</sup> <a name="rsaTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaTokenInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityQuestionInput`<sup>Optional</sup> <a name="securityQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `symantecVipInput`<sup>Optional</sup> <a name="symantecVipInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVipInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webauthnInput`<sup>Optional</sup> <a name="webauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthnInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `yubikeyTokenInput`<sup>Optional</sup> <a name="yubikeyTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyTokenInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdp`<sup>Required</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdps`<sup>Required</sup> <a name="externalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdps"></a>

```java
public java.lang.Object getExternalIdps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `fidoU2F`<sup>Required</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2F();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoWebauthn`<sup>Required</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `googleOtp`<sup>Required</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isOie`<sup>Required</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie"></a>

```java
public java.lang.Object getIsOie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oktaCall`<sup>Required</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCall();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaEmail`<sup>Required</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmail();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaOtp`<sup>Required</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPassword`<sup>Required</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPassword();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPush`<sup>Required</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPush();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaQuestion`<sup>Required</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaSms`<sup>Required</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSms();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaVerify`<sup>Required</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerify();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onpremMfa`<sup>Required</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfa();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumber();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `rsaToken`<sup>Required</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityQuestion`<sup>Required</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `symantecVip`<sup>Required</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVip();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `yubikeyToken`<sup>Required</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaConfig <a name="PolicyMfaConfig" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa.PolicyMfaConfig;

PolicyMfaConfig.builder()
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .duo(java.util.Map<java.lang.String, java.lang.String>)
//  .externalIdp(java.util.Map<java.lang.String, java.lang.String>)
//  .externalIdps(IResolvable)
//  .externalIdps(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .fidoU2F(java.util.Map<java.lang.String, java.lang.String>)
//  .fidoWebauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .googleOtp(java.util.Map<java.lang.String, java.lang.String>)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .hotp(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isOie(java.lang.Boolean)
//  .isOie(IResolvable)
//  .oktaCall(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaEmail(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaOtp(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaPassword(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaPush(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaQuestion(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaSms(java.util.Map<java.lang.String, java.lang.String>)
//  .oktaVerify(java.util.Map<java.lang.String, java.lang.String>)
//  .onpremMfa(java.util.Map<java.lang.String, java.lang.String>)
//  .phoneNumber(java.util.Map<java.lang.String, java.lang.String>)
//  .priority(java.lang.Number)
//  .rsaToken(java.util.Map<java.lang.String, java.lang.String>)
//  .securityQuestion(java.util.Map<java.lang.String, java.lang.String>)
//  .status(java.lang.String)
//  .symantecVip(java.util.Map<java.lang.String, java.lang.String>)
//  .webauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .yubikeyToken(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#duo PolicyMfa#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdps">externalIdps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idps PolicyMfa#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#hotp PolicyMfa#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#id PolicyMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#security_question PolicyMfa#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#name PolicyMfa#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#description PolicyMfa#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#duo PolicyMfa#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}.

---

##### `externalIdps`<sup>Optional</sup> <a name="externalIdps" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdps"></a>

```java
public java.lang.Object getExternalIdps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#external_idps PolicyMfa#external_idps}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2F();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}.

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#groups_included PolicyMfa#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#hotp PolicyMfa#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#id PolicyMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie"></a>

```java
public java.lang.Object getIsOie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#is_oie PolicyMfa#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCall();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmail();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPassword();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPush();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSms();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerify();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfa();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumber();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#priority PolicyMfa#priority}

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#security_question PolicyMfa#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#status PolicyMfa#status}

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVip();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}.

---



