# `signonPolicyRule` Submodule <a name="`signonPolicyRule` Submodule" id="@cdktf/provider-okta.signonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignonPolicyRule <a name="SignonPolicyRule" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule okta_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRule;

SignonPolicyRule.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .access(java.lang.String)
//  .authtype(java.lang.String)
//  .behaviors(java.util.List<java.lang.String>)
//  .factorSequence(IResolvable)
//  .factorSequence(java.util.List<SignonPolicyRuleFactorSequence>)
//  .id(java.lang.String)
//  .identityProvider(java.lang.String)
//  .identityProviderIds(java.util.List<java.lang.String>)
//  .mfaLifetime(java.lang.Number)
//  .mfaPrompt(java.lang.String)
//  .mfaRememberDevice(java.lang.Boolean)
//  .mfaRememberDevice(IResolvable)
//  .mfaRequired(java.lang.Boolean)
//  .mfaRequired(IResolvable)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .policyid(java.lang.String)
//  .policyId(java.lang.String)
//  .primaryFactor(java.lang.String)
//  .priority(java.lang.Number)
//  .riscLevel(java.lang.String)
//  .sessionIdle(java.lang.Number)
//  .sessionLifetime(java.lang.Number)
//  .sessionPersistent(java.lang.Boolean)
//  .sessionPersistent(IResolvable)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.authtype">authtype</a></code> | <code>java.lang.String</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.factorSequence">factorSequence</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>></code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProviderIds">identityProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaLifetime">mfaLifetime</a></code> | <code>java.lang.Number</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaPrompt">mfaPrompt</a></code> | <code>java.lang.String</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRememberDevice">mfaRememberDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRequired">mfaRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyid">policyid</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.primaryFactor">primaryFactor</a></code> | <code>java.lang.String</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.riscLevel">riscLevel</a></code> | <code>java.lang.String</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionIdle">sessionIdle</a></code> | <code>java.lang.Number</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionLifetime">sessionLifetime</a></code> | <code>java.lang.Number</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionPersistent">sessionPersistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.access"></a>

- *Type:* java.lang.String

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.authtype"></a>

- *Type:* java.lang.String

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.behaviors"></a>

- *Type:* java.util.List<java.lang.String>

List of behavior IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}

---

##### `factorSequence`<sup>Optional</sup> <a name="factorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.factorSequence"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>>

factor_sequence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProvider"></a>

- *Type:* java.lang.String

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}

---

##### `identityProviderIds`<sup>Optional</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.identityProviderIds"></a>

- *Type:* java.util.List<java.lang.String>

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}

---

##### `mfaLifetime`<sup>Optional</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaLifetime"></a>

- *Type:* java.lang.Number

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}

---

##### `mfaPrompt`<sup>Optional</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaPrompt"></a>

- *Type:* java.lang.String

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}

---

##### `mfaRememberDevice`<sup>Optional</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRememberDevice"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Remember MFA device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}

---

##### `mfaRequired`<sup>Optional</sup> <a name="mfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.mfaRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require MFA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyid"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}

---

##### `primaryFactor`<sup>Optional</sup> <a name="primaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.primaryFactor"></a>

- *Type:* java.lang.String

Primary factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}

---

##### `riscLevel`<sup>Optional</sup> <a name="riscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.riscLevel"></a>

- *Type:* java.lang.String

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}

---

##### `sessionIdle`<sup>Optional</sup> <a name="sessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionIdle"></a>

- *Type:* java.lang.Number

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionLifetime"></a>

- *Type:* java.lang.Number

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}

---

##### `sessionPersistent`<sup>Optional</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.sessionPersistent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.Initializer.parameter.usersExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence">putFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype">resetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence">resetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds">resetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime">resetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt">resetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice">resetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired">resetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid">resetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor">resetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel">resetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle">resetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime">resetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent">resetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFactorSequence` <a name="putFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence"></a>

```java
public void putFactorSequence(IResolvable OR java.util.List<SignonPolicyRuleFactorSequence> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.putFactorSequence.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>>

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetAuthtype` <a name="resetAuthtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetAuthtype"></a>

```java
public void resetAuthtype()
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetBehaviors"></a>

```java
public void resetBehaviors()
```

##### `resetFactorSequence` <a name="resetFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetFactorSequence"></a>

```java
public void resetFactorSequence()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProvider"></a>

```java
public void resetIdentityProvider()
```

##### `resetIdentityProviderIds` <a name="resetIdentityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetIdentityProviderIds"></a>

```java
public void resetIdentityProviderIds()
```

##### `resetMfaLifetime` <a name="resetMfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaLifetime"></a>

```java
public void resetMfaLifetime()
```

##### `resetMfaPrompt` <a name="resetMfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaPrompt"></a>

```java
public void resetMfaPrompt()
```

##### `resetMfaRememberDevice` <a name="resetMfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRememberDevice"></a>

```java
public void resetMfaRememberDevice()
```

##### `resetMfaRequired` <a name="resetMfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetMfaRequired"></a>

```java
public void resetMfaRequired()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPolicyid` <a name="resetPolicyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyid"></a>

```java
public void resetPolicyid()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetPrimaryFactor` <a name="resetPrimaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPrimaryFactor"></a>

```java
public void resetPrimaryFactor()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRiscLevel` <a name="resetRiscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetRiscLevel"></a>

```java
public void resetRiscLevel()
```

##### `resetSessionIdle` <a name="resetSessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionIdle"></a>

```java
public void resetSessionIdle()
```

##### `resetSessionLifetime` <a name="resetSessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionLifetime"></a>

```java
public void resetSessionLifetime()
```

##### `resetSessionPersistent` <a name="resetSessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetSessionPersistent"></a>

```java
public void resetSessionPersistent()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.resetUsersExcluded"></a>

```java
public void resetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRule;

SignonPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRule;

SignonPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRule;

SignonPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence">factorSequence</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput">authtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput">behaviorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput">factorSequenceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput">identityProviderIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput">identityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput">mfaLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput">mfaPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput">mfaRememberDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput">mfaRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput">policyidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput">primaryFactorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput">riscLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput">sessionIdleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput">sessionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput">sessionPersistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype">authtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds">identityProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime">mfaLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt">mfaPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired">mfaRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid">policyid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor">primaryFactor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel">riscLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle">sessionIdle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime">sessionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent">sessionPersistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `factorSequence`<sup>Required</sup> <a name="factorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequence"></a>

```java
public SignonPolicyRuleFactorSequenceList getFactorSequence();
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList">SignonPolicyRuleFactorSequenceList</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `authtypeInput`<sup>Optional</sup> <a name="authtypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtypeInput"></a>

```java
public java.lang.String getAuthtypeInput();
```

- *Type:* java.lang.String

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviorsInput"></a>

```java
public java.util.List<java.lang.String> getBehaviorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `factorSequenceInput`<sup>Optional</sup> <a name="factorSequenceInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.factorSequenceInput"></a>

```java
public java.lang.Object getFactorSequenceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>>

---

##### `identityProviderIdsInput`<sup>Optional</sup> <a name="identityProviderIdsInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityProviderIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderInput"></a>

```java
public java.lang.String getIdentityProviderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mfaLifetimeInput`<sup>Optional</sup> <a name="mfaLifetimeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetimeInput"></a>

```java
public java.lang.Number getMfaLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `mfaPromptInput`<sup>Optional</sup> <a name="mfaPromptInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPromptInput"></a>

```java
public java.lang.String getMfaPromptInput();
```

- *Type:* java.lang.String

---

##### `mfaRememberDeviceInput`<sup>Optional</sup> <a name="mfaRememberDeviceInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDeviceInput"></a>

```java
public java.lang.Object getMfaRememberDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mfaRequiredInput`<sup>Optional</sup> <a name="mfaRequiredInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequiredInput"></a>

```java
public java.lang.Object getMfaRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyidInput`<sup>Optional</sup> <a name="policyidInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyidInput"></a>

```java
public java.lang.String getPolicyidInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `primaryFactorInput`<sup>Optional</sup> <a name="primaryFactorInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactorInput"></a>

```java
public java.lang.String getPrimaryFactorInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `riscLevelInput`<sup>Optional</sup> <a name="riscLevelInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevelInput"></a>

```java
public java.lang.String getRiscLevelInput();
```

- *Type:* java.lang.String

---

##### `sessionIdleInput`<sup>Optional</sup> <a name="sessionIdleInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdleInput"></a>

```java
public java.lang.Number getSessionIdleInput();
```

- *Type:* java.lang.Number

---

##### `sessionLifetimeInput`<sup>Optional</sup> <a name="sessionLifetimeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetimeInput"></a>

```java
public java.lang.Number getSessionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `sessionPersistentInput`<sup>Optional</sup> <a name="sessionPersistentInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistentInput"></a>

```java
public java.lang.Object getSessionPersistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `authtype`<sup>Required</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.authtype"></a>

```java
public java.lang.String getAuthtype();
```

- *Type:* java.lang.String

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.behaviors"></a>

```java
public java.util.List<java.lang.String> getBehaviors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `identityProviderIds`<sup>Required</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.identityProviderIds"></a>

```java
public java.util.List<java.lang.String> getIdentityProviderIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mfaLifetime`<sup>Required</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaLifetime"></a>

```java
public java.lang.Number getMfaLifetime();
```

- *Type:* java.lang.Number

---

##### `mfaPrompt`<sup>Required</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaPrompt"></a>

```java
public java.lang.String getMfaPrompt();
```

- *Type:* java.lang.String

---

##### `mfaRememberDevice`<sup>Required</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRememberDevice"></a>

```java
public java.lang.Object getMfaRememberDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mfaRequired`<sup>Required</sup> <a name="mfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.mfaRequired"></a>

```java
public java.lang.Object getMfaRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyid"></a>

```java
public java.lang.String getPolicyid();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `primaryFactor`<sup>Required</sup> <a name="primaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.primaryFactor"></a>

```java
public java.lang.String getPrimaryFactor();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `riscLevel`<sup>Required</sup> <a name="riscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.riscLevel"></a>

```java
public java.lang.String getRiscLevel();
```

- *Type:* java.lang.String

---

##### `sessionIdle`<sup>Required</sup> <a name="sessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionIdle"></a>

```java
public java.lang.Number getSessionIdle();
```

- *Type:* java.lang.Number

---

##### `sessionLifetime`<sup>Required</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionLifetime"></a>

```java
public java.lang.Number getSessionLifetime();
```

- *Type:* java.lang.Number

---

##### `sessionPersistent`<sup>Required</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.sessionPersistent"></a>

```java
public java.lang.Object getSessionPersistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignonPolicyRuleConfig <a name="SignonPolicyRuleConfig" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleConfig;

SignonPolicyRuleConfig.builder()
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
    .name(java.lang.String)
//  .access(java.lang.String)
//  .authtype(java.lang.String)
//  .behaviors(java.util.List<java.lang.String>)
//  .factorSequence(IResolvable)
//  .factorSequence(java.util.List<SignonPolicyRuleFactorSequence>)
//  .id(java.lang.String)
//  .identityProvider(java.lang.String)
//  .identityProviderIds(java.util.List<java.lang.String>)
//  .mfaLifetime(java.lang.Number)
//  .mfaPrompt(java.lang.String)
//  .mfaRememberDevice(java.lang.Boolean)
//  .mfaRememberDevice(IResolvable)
//  .mfaRequired(java.lang.Boolean)
//  .mfaRequired(IResolvable)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .policyid(java.lang.String)
//  .policyId(java.lang.String)
//  .primaryFactor(java.lang.String)
//  .priority(java.lang.Number)
//  .riscLevel(java.lang.String)
//  .sessionIdle(java.lang.Number)
//  .sessionLifetime(java.lang.Number)
//  .sessionPersistent(java.lang.Boolean)
//  .sessionPersistent(IResolvable)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype">authtype</a></code> | <code>java.lang.String</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence">factorSequence</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>></code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds">identityProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime">mfaLifetime</a></code> | <code>java.lang.Number</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt">mfaPrompt</a></code> | <code>java.lang.String</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired">mfaRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid">policyid</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor">primaryFactor</a></code> | <code>java.lang.String</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel">riscLevel</a></code> | <code>java.lang.String</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle">sessionIdle</a></code> | <code>java.lang.Number</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime">sessionLifetime</a></code> | <code>java.lang.Number</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent">sessionPersistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#name SignonPolicyRule#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#access SignonPolicyRule#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.authtype"></a>

```java
public java.lang.String getAuthtype();
```

- *Type:* java.lang.String

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#authtype SignonPolicyRule#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.behaviors"></a>

```java
public java.util.List<java.lang.String> getBehaviors();
```

- *Type:* java.util.List<java.lang.String>

List of behavior IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#behaviors SignonPolicyRule#behaviors}

---

##### `factorSequence`<sup>Optional</sup> <a name="factorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.factorSequence"></a>

```java
public java.lang.Object getFactorSequence();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>>

factor_sequence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_sequence SignonPolicyRule#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#id SignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider SignonPolicyRule#identity_provider}

---

##### `identityProviderIds`<sup>Optional</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.identityProviderIds"></a>

```java
public java.util.List<java.lang.String> getIdentityProviderIds();
```

- *Type:* java.util.List<java.lang.String>

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#identity_provider_ids SignonPolicyRule#identity_provider_ids}

---

##### `mfaLifetime`<sup>Optional</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaLifetime"></a>

```java
public java.lang.Number getMfaLifetime();
```

- *Type:* java.lang.Number

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_lifetime SignonPolicyRule#mfa_lifetime}

---

##### `mfaPrompt`<sup>Optional</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaPrompt"></a>

```java
public java.lang.String getMfaPrompt();
```

- *Type:* java.lang.String

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_prompt SignonPolicyRule#mfa_prompt}

---

##### `mfaRememberDevice`<sup>Optional</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRememberDevice"></a>

```java
public java.lang.Object getMfaRememberDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Remember MFA device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_remember_device SignonPolicyRule#mfa_remember_device}

---

##### `mfaRequired`<sup>Optional</sup> <a name="mfaRequired" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.mfaRequired"></a>

```java
public java.lang.Object getMfaRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require MFA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#mfa_required SignonPolicyRule#mfa_required}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_connection SignonPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_excludes SignonPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#network_includes SignonPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyid"></a>

```java
public java.lang.String getPolicyid();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policyid SignonPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#policy_id SignonPolicyRule#policy_id}

---

##### `primaryFactor`<sup>Optional</sup> <a name="primaryFactor" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.primaryFactor"></a>

```java
public java.lang.String getPrimaryFactor();
```

- *Type:* java.lang.String

Primary factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_factor SignonPolicyRule#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#priority SignonPolicyRule#priority}

---

##### `riscLevel`<sup>Optional</sup> <a name="riscLevel" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.riscLevel"></a>

```java
public java.lang.String getRiscLevel();
```

- *Type:* java.lang.String

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#risc_level SignonPolicyRule#risc_level}

---

##### `sessionIdle`<sup>Optional</sup> <a name="sessionIdle" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionIdle"></a>

```java
public java.lang.Number getSessionIdle();
```

- *Type:* java.lang.Number

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_idle SignonPolicyRule#session_idle}

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionLifetime"></a>

```java
public java.lang.Number getSessionLifetime();
```

- *Type:* java.lang.Number

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_lifetime SignonPolicyRule#session_lifetime}

---

##### `sessionPersistent`<sup>Optional</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.sessionPersistent"></a>

```java
public java.lang.Object getSessionPersistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#session_persistent SignonPolicyRule#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#status SignonPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleConfig.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#users_excluded SignonPolicyRule#users_excluded}

---

### SignonPolicyRuleFactorSequence <a name="SignonPolicyRuleFactorSequence" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleFactorSequence;

SignonPolicyRuleFactorSequence.builder()
    .primaryCriteriaFactorType(java.lang.String)
    .primaryCriteriaProvider(java.lang.String)
//  .secondaryCriteria(IResolvable)
//  .secondaryCriteria(java.util.List<SignonPolicyRuleFactorSequenceSecondaryCriteria>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>java.lang.String</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>java.lang.String</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria">secondaryCriteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>></code> | secondary_criteria block. |

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaFactorType"></a>

```java
public java.lang.String getPrimaryCriteriaFactorType();
```

- *Type:* java.lang.String

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_factor_type SignonPolicyRule#primary_criteria_factor_type}

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.primaryCriteriaProvider"></a>

```java
public java.lang.String getPrimaryCriteriaProvider();
```

- *Type:* java.lang.String

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#primary_criteria_provider SignonPolicyRule#primary_criteria_provider}

---

##### `secondaryCriteria`<sup>Optional</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence.property.secondaryCriteria"></a>

```java
public java.lang.Object getSecondaryCriteria();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>>

secondary_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#secondary_criteria SignonPolicyRule#secondary_criteria}

---

### SignonPolicyRuleFactorSequenceSecondaryCriteria <a name="SignonPolicyRuleFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleFactorSequenceSecondaryCriteria;

SignonPolicyRuleFactorSequenceSecondaryCriteria.builder()
    .factorType(java.lang.String)
    .provider(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType">factorType</a></code> | <code>java.lang.String</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider">provider</a></code> | <code>java.lang.String</code> | Factor provider. |

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.factorType"></a>

```java
public java.lang.String getFactorType();
```

- *Type:* java.lang.String

Type of a Factor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#factor_type SignonPolicyRule#factor_type}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Factor provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy_rule#provider SignonPolicyRule#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### SignonPolicyRuleFactorSequenceList <a name="SignonPolicyRuleFactorSequenceList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleFactorSequenceList;

new SignonPolicyRuleFactorSequenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get"></a>

```java
public SignonPolicyRuleFactorSequenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a>>

---


### SignonPolicyRuleFactorSequenceOutputReference <a name="SignonPolicyRuleFactorSequenceOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleFactorSequenceOutputReference;

new SignonPolicyRuleFactorSequenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria">putSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria">resetSecondaryCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecondaryCriteria` <a name="putSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria"></a>

```java
public void putSecondaryCriteria(IResolvable OR java.util.List<SignonPolicyRuleFactorSequenceSecondaryCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>>

---

##### `resetSecondaryCriteria` <a name="resetSecondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```java
public void resetSecondaryCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria">secondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">primaryCriteriaFactorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput">primaryCriteriaProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput">secondaryCriteriaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secondaryCriteria`<sup>Required</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteria"></a>

```java
public SignonPolicyRuleFactorSequenceSecondaryCriteriaList getSecondaryCriteria();
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList">SignonPolicyRuleFactorSequenceSecondaryCriteriaList</a>

---

##### `primaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="primaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```java
public java.lang.String getPrimaryCriteriaFactorTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryCriteriaProviderInput`<sup>Optional</sup> <a name="primaryCriteriaProviderInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```java
public java.lang.String getPrimaryCriteriaProviderInput();
```

- *Type:* java.lang.String

---

##### `secondaryCriteriaInput`<sup>Optional</sup> <a name="secondaryCriteriaInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```java
public java.lang.Object getSecondaryCriteriaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>>

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```java
public java.lang.String getPrimaryCriteriaFactorType();
```

- *Type:* java.lang.String

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```java
public java.lang.String getPrimaryCriteriaProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequence">SignonPolicyRuleFactorSequence</a> OR com.hashicorp.cdktf.IResolvable

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaList <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList;

new SignonPolicyRuleFactorSequenceSecondaryCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get"></a>

```java
public SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a>>

---


### SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference <a name="SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.signon_policy_rule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference;

new SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">factorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType">factorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `factorTypeInput`<sup>Optional</sup> <a name="factorTypeInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```java
public java.lang.String getFactorTypeInput();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```java
public java.lang.String getFactorType();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.signonPolicyRule.SignonPolicyRuleFactorSequenceSecondaryCriteria">SignonPolicyRuleFactorSequenceSecondaryCriteria</a> OR com.hashicorp.cdktf.IResolvable

---



