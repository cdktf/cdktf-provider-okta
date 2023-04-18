# `okta_mfa_policy`

Refer to the Terraform Registory for docs: [`okta_mfa_policy`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy).

# `mfaPolicy` Submodule <a name="`mfaPolicy` Submodule" id="@cdktf/provider-okta.mfaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicy <a name="MfaPolicy" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy okta_mfa_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy.MfaPolicy;

MfaPolicy.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#name MfaPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#description MfaPolicy#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.duo"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#duo MfaPolicy#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.externalIdp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoU2F"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.fidoWebauthn"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.googleOtp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.groupsIncluded"></a>

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.hotp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.isOie"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaCall"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaEmail"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaOtp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPassword"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaPush"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaQuestion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaSms"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.oktaVerify"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.onpremMfa"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.phoneNumber"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#priority MfaPolicy#priority}

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.rsaToken"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.securityQuestion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#status MfaPolicy#status}

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.symantecVip"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.webauthn"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.yubikeyToken"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo">resetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp">resetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F">resetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn">resetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp">resetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp">resetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie">resetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall">resetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail">resetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp">resetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword">resetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush">resetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion">resetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms">resetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify">resetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa">resetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken">resetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion">resetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip">resetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn">resetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken">resetYubikeyToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDuo` <a name="resetDuo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo"></a>

```java
public void resetDuo()
```

##### `resetExternalIdp` <a name="resetExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp"></a>

```java
public void resetExternalIdp()
```

##### `resetFidoU2F` <a name="resetFidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F"></a>

```java
public void resetFidoU2F()
```

##### `resetFidoWebauthn` <a name="resetFidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn"></a>

```java
public void resetFidoWebauthn()
```

##### `resetGoogleOtp` <a name="resetGoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp"></a>

```java
public void resetGoogleOtp()
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded"></a>

```java
public void resetGroupsIncluded()
```

##### `resetHotp` <a name="resetHotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp"></a>

```java
public void resetHotp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIsOie` <a name="resetIsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie"></a>

```java
public void resetIsOie()
```

##### `resetOktaCall` <a name="resetOktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall"></a>

```java
public void resetOktaCall()
```

##### `resetOktaEmail` <a name="resetOktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail"></a>

```java
public void resetOktaEmail()
```

##### `resetOktaOtp` <a name="resetOktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp"></a>

```java
public void resetOktaOtp()
```

##### `resetOktaPassword` <a name="resetOktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword"></a>

```java
public void resetOktaPassword()
```

##### `resetOktaPush` <a name="resetOktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush"></a>

```java
public void resetOktaPush()
```

##### `resetOktaQuestion` <a name="resetOktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion"></a>

```java
public void resetOktaQuestion()
```

##### `resetOktaSms` <a name="resetOktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms"></a>

```java
public void resetOktaSms()
```

##### `resetOktaVerify` <a name="resetOktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify"></a>

```java
public void resetOktaVerify()
```

##### `resetOnpremMfa` <a name="resetOnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa"></a>

```java
public void resetOnpremMfa()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRsaToken` <a name="resetRsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken"></a>

```java
public void resetRsaToken()
```

##### `resetSecurityQuestion` <a name="resetSecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion"></a>

```java
public void resetSecurityQuestion()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSymantecVip` <a name="resetSymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip"></a>

```java
public void resetSymantecVip()
```

##### `resetWebauthn` <a name="resetWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn"></a>

```java
public void resetWebauthn()
```

##### `resetYubikeyToken` <a name="resetYubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken"></a>

```java
public void resetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy.MfaPolicy;

MfaPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy.MfaPolicy;

MfaPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy.MfaPolicy;

MfaPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput">duoInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput">externalIdpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput">fidoU2FInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput">fidoWebauthnInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput">googleOtpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput">hotpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput">isOieInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput">oktaCallInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput">oktaEmailInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput">oktaOtpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput">oktaPasswordInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput">oktaPushInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput">oktaQuestionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput">oktaSmsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput">oktaVerifyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput">onpremMfaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput">rsaTokenInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput">securityQuestionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput">symantecVipInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput">webauthnInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput">yubikeyTokenInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `duoInput`<sup>Optional</sup> <a name="duoInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuoInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdpInput`<sup>Optional</sup> <a name="externalIdpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoU2FInput`<sup>Optional</sup> <a name="fidoU2FInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2FInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoWebauthnInput`<sup>Optional</sup> <a name="fidoWebauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthnInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `googleOtpInput`<sup>Optional</sup> <a name="googleOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput"></a>

```java
public java.util.List<java.lang.String> getGroupsIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hotpInput`<sup>Optional</sup> <a name="hotpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isOieInput`<sup>Optional</sup> <a name="isOieInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput"></a>

```java
public java.lang.Object getIsOieInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oktaCallInput`<sup>Optional</sup> <a name="oktaCallInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCallInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaEmailInput`<sup>Optional</sup> <a name="oktaEmailInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmailInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaOtpInput`<sup>Optional</sup> <a name="oktaOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPasswordInput`<sup>Optional</sup> <a name="oktaPasswordInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPasswordInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPushInput`<sup>Optional</sup> <a name="oktaPushInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPushInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaQuestionInput`<sup>Optional</sup> <a name="oktaQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaSmsInput`<sup>Optional</sup> <a name="oktaSmsInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSmsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaVerifyInput`<sup>Optional</sup> <a name="oktaVerifyInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerifyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onpremMfaInput`<sup>Optional</sup> <a name="onpremMfaInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumberInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rsaTokenInput`<sup>Optional</sup> <a name="rsaTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaTokenInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityQuestionInput`<sup>Optional</sup> <a name="securityQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `symantecVipInput`<sup>Optional</sup> <a name="symantecVipInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVipInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webauthnInput`<sup>Optional</sup> <a name="webauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthnInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `yubikeyTokenInput`<sup>Optional</sup> <a name="yubikeyTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyTokenInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdp`<sup>Required</sup> <a name="externalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoU2F`<sup>Required</sup> <a name="fidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2F();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoWebauthn`<sup>Required</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `googleOtp`<sup>Required</sup> <a name="googleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isOie`<sup>Required</sup> <a name="isOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie"></a>

```java
public java.lang.Object getIsOie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oktaCall`<sup>Required</sup> <a name="oktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCall();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaEmail`<sup>Required</sup> <a name="oktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmail();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaOtp`<sup>Required</sup> <a name="oktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPassword`<sup>Required</sup> <a name="oktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPassword();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPush`<sup>Required</sup> <a name="oktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPush();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaQuestion`<sup>Required</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaSms`<sup>Required</sup> <a name="oktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSms();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaVerify`<sup>Required</sup> <a name="oktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerify();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onpremMfa`<sup>Required</sup> <a name="onpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfa();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumber();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `rsaToken`<sup>Required</sup> <a name="rsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityQuestion`<sup>Required</sup> <a name="securityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `symantecVip`<sup>Required</sup> <a name="symantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVip();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `yubikeyToken`<sup>Required</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyConfig <a name="MfaPolicyConfig" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy.MfaPolicyConfig;

MfaPolicyConfig.builder()
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
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#name MfaPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#description MfaPolicy#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#duo MfaPolicy#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2F();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie"></a>

```java
public java.lang.Object getIsOie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCall();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmail();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPassword();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPush();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSms();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerify();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfa();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumber();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#priority MfaPolicy#priority}

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#status MfaPolicy#status}

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVip();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---



