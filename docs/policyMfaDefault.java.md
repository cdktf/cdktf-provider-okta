# `policyMfaDefault` Submodule <a name="`policyMfaDefault` Submodule" id="@cdktf/provider-okta.policyMfaDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfaDefault <a name="PolicyMfaDefault" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default okta_policy_mfa_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa_default.PolicyMfaDefault;

PolicyMfaDefault.Builder.create(Construct scope, java.lang.String id)
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
//  .duo(java.util.Map<java.lang.String, java.lang.String>)
//  .externalIdp(java.util.Map<java.lang.String, java.lang.String>)
//  .fidoU2F(java.util.Map<java.lang.String, java.lang.String>)
//  .fidoWebauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .googleOtp(java.util.Map<java.lang.String, java.lang.String>)
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
//  .rsaToken(java.util.Map<java.lang.String, java.lang.String>)
//  .securityQuestion(java.util.Map<java.lang.String, java.lang.String>)
//  .symantecVip(java.util.Map<java.lang.String, java.lang.String>)
//  .webauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .yubikeyToken(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.duo"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.externalIdp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoU2F"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.fidoWebauthn"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.googleOtp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.hotp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.isOie"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaCall"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaEmail"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaOtp"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPassword"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaPush"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaQuestion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaSms"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.oktaVerify"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.onpremMfa"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.phoneNumber"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.rsaToken"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.securityQuestion"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.symantecVip"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.webauthn"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.yubikeyToken"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo">resetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp">resetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F">resetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn">resetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp">resetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp">resetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie">resetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall">resetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail">resetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp">resetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword">resetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush">resetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion">resetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms">resetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify">resetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa">resetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken">resetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion">resetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip">resetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn">resetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken">resetYubikeyToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDuo` <a name="resetDuo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo"></a>

```java
public void resetDuo()
```

##### `resetExternalIdp` <a name="resetExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp"></a>

```java
public void resetExternalIdp()
```

##### `resetFidoU2F` <a name="resetFidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F"></a>

```java
public void resetFidoU2F()
```

##### `resetFidoWebauthn` <a name="resetFidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn"></a>

```java
public void resetFidoWebauthn()
```

##### `resetGoogleOtp` <a name="resetGoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp"></a>

```java
public void resetGoogleOtp()
```

##### `resetHotp` <a name="resetHotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp"></a>

```java
public void resetHotp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId"></a>

```java
public void resetId()
```

##### `resetIsOie` <a name="resetIsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie"></a>

```java
public void resetIsOie()
```

##### `resetOktaCall` <a name="resetOktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall"></a>

```java
public void resetOktaCall()
```

##### `resetOktaEmail` <a name="resetOktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail"></a>

```java
public void resetOktaEmail()
```

##### `resetOktaOtp` <a name="resetOktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp"></a>

```java
public void resetOktaOtp()
```

##### `resetOktaPassword` <a name="resetOktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword"></a>

```java
public void resetOktaPassword()
```

##### `resetOktaPush` <a name="resetOktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush"></a>

```java
public void resetOktaPush()
```

##### `resetOktaQuestion` <a name="resetOktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion"></a>

```java
public void resetOktaQuestion()
```

##### `resetOktaSms` <a name="resetOktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms"></a>

```java
public void resetOktaSms()
```

##### `resetOktaVerify` <a name="resetOktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify"></a>

```java
public void resetOktaVerify()
```

##### `resetOnpremMfa` <a name="resetOnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa"></a>

```java
public void resetOnpremMfa()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetRsaToken` <a name="resetRsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken"></a>

```java
public void resetRsaToken()
```

##### `resetSecurityQuestion` <a name="resetSecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion"></a>

```java
public void resetSecurityQuestion()
```

##### `resetSymantecVip` <a name="resetSymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip"></a>

```java
public void resetSymantecVip()
```

##### `resetWebauthn` <a name="resetWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn"></a>

```java
public void resetWebauthn()
```

##### `resetYubikeyToken` <a name="resetYubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken"></a>

```java
public void resetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa_default.PolicyMfaDefault;

PolicyMfaDefault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa_default.PolicyMfaDefault;

PolicyMfaDefault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa_default.PolicyMfaDefault;

PolicyMfaDefault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId">defaultIncludedGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput">duoInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput">externalIdpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput">fidoU2FInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput">fidoWebauthnInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput">googleOtpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput">hotpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput">isOieInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput">oktaCallInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput">oktaEmailInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput">oktaOtpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput">oktaPasswordInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput">oktaPushInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput">oktaQuestionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput">oktaSmsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput">oktaVerifyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput">onpremMfaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput">rsaTokenInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput">securityQuestionInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput">symantecVipInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput">webauthnInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput">yubikeyTokenInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultIncludedGroupId`<sup>Required</sup> <a name="defaultIncludedGroupId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId"></a>

```java
public java.lang.String getDefaultIncludedGroupId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `duoInput`<sup>Optional</sup> <a name="duoInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuoInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdpInput`<sup>Optional</sup> <a name="externalIdpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoU2FInput`<sup>Optional</sup> <a name="fidoU2FInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2FInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoWebauthnInput`<sup>Optional</sup> <a name="fidoWebauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthnInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `googleOtpInput`<sup>Optional</sup> <a name="googleOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hotpInput`<sup>Optional</sup> <a name="hotpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isOieInput`<sup>Optional</sup> <a name="isOieInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput"></a>

```java
public java.lang.Object getIsOieInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oktaCallInput`<sup>Optional</sup> <a name="oktaCallInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCallInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaEmailInput`<sup>Optional</sup> <a name="oktaEmailInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmailInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaOtpInput`<sup>Optional</sup> <a name="oktaOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPasswordInput`<sup>Optional</sup> <a name="oktaPasswordInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPasswordInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPushInput`<sup>Optional</sup> <a name="oktaPushInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPushInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaQuestionInput`<sup>Optional</sup> <a name="oktaQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaSmsInput`<sup>Optional</sup> <a name="oktaSmsInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSmsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaVerifyInput`<sup>Optional</sup> <a name="oktaVerifyInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerifyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onpremMfaInput`<sup>Optional</sup> <a name="onpremMfaInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumberInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rsaTokenInput`<sup>Optional</sup> <a name="rsaTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaTokenInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityQuestionInput`<sup>Optional</sup> <a name="securityQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestionInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `symantecVipInput`<sup>Optional</sup> <a name="symantecVipInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVipInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webauthnInput`<sup>Optional</sup> <a name="webauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthnInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `yubikeyTokenInput`<sup>Optional</sup> <a name="yubikeyTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyTokenInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalIdp`<sup>Required</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoU2F`<sup>Required</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2F();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fidoWebauthn`<sup>Required</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `googleOtp`<sup>Required</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isOie`<sup>Required</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie"></a>

```java
public java.lang.Object getIsOie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oktaCall`<sup>Required</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCall();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaEmail`<sup>Required</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmail();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaOtp`<sup>Required</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPassword`<sup>Required</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPassword();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaPush`<sup>Required</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPush();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaQuestion`<sup>Required</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaSms`<sup>Required</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSms();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oktaVerify`<sup>Required</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerify();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onpremMfa`<sup>Required</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfa();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumber();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rsaToken`<sup>Required</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityQuestion`<sup>Required</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `symantecVip`<sup>Required</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVip();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `yubikeyToken`<sup>Required</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaDefaultConfig <a name="PolicyMfaDefaultConfig" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_mfa_default.PolicyMfaDefaultConfig;

PolicyMfaDefaultConfig.builder()
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
//  .duo(java.util.Map<java.lang.String, java.lang.String>)
//  .externalIdp(java.util.Map<java.lang.String, java.lang.String>)
//  .fidoU2F(java.util.Map<java.lang.String, java.lang.String>)
//  .fidoWebauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .googleOtp(java.util.Map<java.lang.String, java.lang.String>)
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
//  .rsaToken(java.util.Map<java.lang.String, java.lang.String>)
//  .securityQuestion(java.util.Map<java.lang.String, java.lang.String>)
//  .symantecVip(java.util.Map<java.lang.String, java.lang.String>)
//  .webauthn(java.util.Map<java.lang.String, java.lang.String>)
//  .yubikeyToken(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo">duo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp">externalIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F">fidoU2F</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn">fidoWebauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp">googleOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp">hotp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie">isOie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall">oktaCall</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail">oktaEmail</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp">oktaOtp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword">oktaPassword</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush">oktaPush</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion">oktaQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms">oktaSms</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify">oktaVerify</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa">onpremMfa</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken">rsaToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion">securityQuestion</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip">symantecVip</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn">webauthn</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken">yubikeyToken</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDuo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExternalIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoU2F();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFidoWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getGoogleOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHotp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie"></a>

```java
public java.lang.Object getIsOie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaCall();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaEmail();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaOtp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPassword();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaPush();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaSms();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOktaVerify();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOnpremMfa();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPhoneNumber();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRsaToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityQuestion();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSymantecVip();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getWebauthn();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getYubikeyToken();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---



