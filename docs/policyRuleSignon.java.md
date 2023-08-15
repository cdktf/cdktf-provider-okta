# `okta_policy_rule_signon`

Refer to the Terraform Registory for docs: [`okta_policy_rule_signon`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon).

# `policyRuleSignon` Submodule <a name="`policyRuleSignon` Submodule" id="@cdktf/provider-okta.policyRuleSignon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleSignon <a name="PolicyRuleSignon" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon okta_policy_rule_signon}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignon;

PolicyRuleSignon.Builder.create(Construct scope, java.lang.String id)
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
//  .access(java.lang.String)
//  .authtype(java.lang.String)
//  .behaviors(java.util.List<java.lang.String>)
//  .factorSequence(IResolvable)
//  .factorSequence(java.util.List<PolicyRuleSignonFactorSequence>)
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
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.authtype">authtype</a></code> | <code>java.lang.String</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.factorSequence">factorSequence</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>></code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProviderIds">identityProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaLifetime">mfaLifetime</a></code> | <code>java.lang.Number</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaPrompt">mfaPrompt</a></code> | <code>java.lang.String</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRememberDevice">mfaRememberDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRequired">mfaRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.primaryFactor">primaryFactor</a></code> | <code>java.lang.String</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.riscLevel">riscLevel</a></code> | <code>java.lang.String</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionIdle">sessionIdle</a></code> | <code>java.lang.Number</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionLifetime">sessionLifetime</a></code> | <code>java.lang.Number</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionPersistent">sessionPersistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.access"></a>

- *Type:* java.lang.String

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.authtype"></a>

- *Type:* java.lang.String

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.behaviors"></a>

- *Type:* java.util.List<java.lang.String>

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `factorSequence`<sup>Optional</sup> <a name="factorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.factorSequence"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>>

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProvider"></a>

- *Type:* java.lang.String

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `identityProviderIds`<sup>Optional</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.identityProviderIds"></a>

- *Type:* java.util.List<java.lang.String>

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `mfaLifetime`<sup>Optional</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaLifetime"></a>

- *Type:* java.lang.Number

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `mfaPrompt`<sup>Optional</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaPrompt"></a>

- *Type:* java.lang.String

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `mfaRememberDevice`<sup>Optional</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRememberDevice"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Remember MFA device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `mfaRequired`<sup>Optional</sup> <a name="mfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.mfaRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require MFA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `primaryFactor`<sup>Optional</sup> <a name="primaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.primaryFactor"></a>

- *Type:* java.lang.String

Primary factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `riscLevel`<sup>Optional</sup> <a name="riscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.riscLevel"></a>

- *Type:* java.lang.String

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `sessionIdle`<sup>Optional</sup> <a name="sessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionIdle"></a>

- *Type:* java.lang.Number

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionLifetime"></a>

- *Type:* java.lang.Number

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `sessionPersistent`<sup>Optional</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.sessionPersistent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.usersExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence">putFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype">resetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence">resetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds">resetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime">resetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt">resetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice">resetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired">resetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor">resetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel">resetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle">resetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime">resetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent">resetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFactorSequence` <a name="putFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence"></a>

```java
public void putFactorSequence(IResolvable OR java.util.List<PolicyRuleSignonFactorSequence> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>>

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetAuthtype` <a name="resetAuthtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype"></a>

```java
public void resetAuthtype()
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors"></a>

```java
public void resetBehaviors()
```

##### `resetFactorSequence` <a name="resetFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence"></a>

```java
public void resetFactorSequence()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider"></a>

```java
public void resetIdentityProvider()
```

##### `resetIdentityProviderIds` <a name="resetIdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds"></a>

```java
public void resetIdentityProviderIds()
```

##### `resetMfaLifetime` <a name="resetMfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime"></a>

```java
public void resetMfaLifetime()
```

##### `resetMfaPrompt` <a name="resetMfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt"></a>

```java
public void resetMfaPrompt()
```

##### `resetMfaRememberDevice` <a name="resetMfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice"></a>

```java
public void resetMfaRememberDevice()
```

##### `resetMfaRequired` <a name="resetMfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired"></a>

```java
public void resetMfaRequired()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetPrimaryFactor` <a name="resetPrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor"></a>

```java
public void resetPrimaryFactor()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRiscLevel` <a name="resetRiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel"></a>

```java
public void resetRiscLevel()
```

##### `resetSessionIdle` <a name="resetSessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle"></a>

```java
public void resetSessionIdle()
```

##### `resetSessionLifetime` <a name="resetSessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime"></a>

```java
public void resetSessionLifetime()
```

##### `resetSessionPersistent` <a name="resetSessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent"></a>

```java
public void resetSessionPersistent()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded"></a>

```java
public void resetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignon;

PolicyRuleSignon.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignon;

PolicyRuleSignon.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignon;

PolicyRuleSignon.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence">factorSequence</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput">authtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput">behaviorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput">factorSequenceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput">identityProviderIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput">identityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput">mfaLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput">mfaPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput">mfaRememberDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput">mfaRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput">primaryFactorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput">riscLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput">sessionIdleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput">sessionLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput">sessionPersistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput">usersExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype">authtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds">identityProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime">mfaLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt">mfaPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired">mfaRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor">primaryFactor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel">riscLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle">sessionIdle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime">sessionLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent">sessionPersistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `factorSequence`<sup>Required</sup> <a name="factorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence"></a>

```java
public PolicyRuleSignonFactorSequenceList getFactorSequence();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `authtypeInput`<sup>Optional</sup> <a name="authtypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput"></a>

```java
public java.lang.String getAuthtypeInput();
```

- *Type:* java.lang.String

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput"></a>

```java
public java.util.List<java.lang.String> getBehaviorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `factorSequenceInput`<sup>Optional</sup> <a name="factorSequenceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput"></a>

```java
public java.lang.Object getFactorSequenceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>>

---

##### `identityProviderIdsInput`<sup>Optional</sup> <a name="identityProviderIdsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityProviderIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput"></a>

```java
public java.lang.String getIdentityProviderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mfaLifetimeInput`<sup>Optional</sup> <a name="mfaLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput"></a>

```java
public java.lang.Number getMfaLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `mfaPromptInput`<sup>Optional</sup> <a name="mfaPromptInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput"></a>

```java
public java.lang.String getMfaPromptInput();
```

- *Type:* java.lang.String

---

##### `mfaRememberDeviceInput`<sup>Optional</sup> <a name="mfaRememberDeviceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput"></a>

```java
public java.lang.Object getMfaRememberDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mfaRequiredInput`<sup>Optional</sup> <a name="mfaRequiredInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput"></a>

```java
public java.lang.Object getMfaRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `primaryFactorInput`<sup>Optional</sup> <a name="primaryFactorInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput"></a>

```java
public java.lang.String getPrimaryFactorInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `riscLevelInput`<sup>Optional</sup> <a name="riscLevelInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput"></a>

```java
public java.lang.String getRiscLevelInput();
```

- *Type:* java.lang.String

---

##### `sessionIdleInput`<sup>Optional</sup> <a name="sessionIdleInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput"></a>

```java
public java.lang.Number getSessionIdleInput();
```

- *Type:* java.lang.Number

---

##### `sessionLifetimeInput`<sup>Optional</sup> <a name="sessionLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput"></a>

```java
public java.lang.Number getSessionLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `sessionPersistentInput`<sup>Optional</sup> <a name="sessionPersistentInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput"></a>

```java
public java.lang.Object getSessionPersistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `authtype`<sup>Required</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype"></a>

```java
public java.lang.String getAuthtype();
```

- *Type:* java.lang.String

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors"></a>

```java
public java.util.List<java.lang.String> getBehaviors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `identityProviderIds`<sup>Required</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds"></a>

```java
public java.util.List<java.lang.String> getIdentityProviderIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mfaLifetime`<sup>Required</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime"></a>

```java
public java.lang.Number getMfaLifetime();
```

- *Type:* java.lang.Number

---

##### `mfaPrompt`<sup>Required</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt"></a>

```java
public java.lang.String getMfaPrompt();
```

- *Type:* java.lang.String

---

##### `mfaRememberDevice`<sup>Required</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice"></a>

```java
public java.lang.Object getMfaRememberDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mfaRequired`<sup>Required</sup> <a name="mfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired"></a>

```java
public java.lang.Object getMfaRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `primaryFactor`<sup>Required</sup> <a name="primaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor"></a>

```java
public java.lang.String getPrimaryFactor();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `riscLevel`<sup>Required</sup> <a name="riscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel"></a>

```java
public java.lang.String getRiscLevel();
```

- *Type:* java.lang.String

---

##### `sessionIdle`<sup>Required</sup> <a name="sessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle"></a>

```java
public java.lang.Number getSessionIdle();
```

- *Type:* java.lang.Number

---

##### `sessionLifetime`<sup>Required</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime"></a>

```java
public java.lang.Number getSessionLifetime();
```

- *Type:* java.lang.Number

---

##### `sessionPersistent`<sup>Required</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent"></a>

```java
public java.lang.Object getSessionPersistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleSignonConfig <a name="PolicyRuleSignonConfig" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonConfig;

PolicyRuleSignonConfig.builder()
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
//  .access(java.lang.String)
//  .authtype(java.lang.String)
//  .behaviors(java.util.List<java.lang.String>)
//  .factorSequence(IResolvable)
//  .factorSequence(java.util.List<PolicyRuleSignonFactorSequence>)
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
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype">authtype</a></code> | <code>java.lang.String</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors">behaviors</a></code> | <code>java.util.List<java.lang.String></code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence">factorSequence</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>></code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds">identityProviderIds</a></code> | <code>java.util.List<java.lang.String></code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime">mfaLifetime</a></code> | <code>java.lang.Number</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt">mfaPrompt</a></code> | <code>java.lang.String</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice">mfaRememberDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired">mfaRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor">primaryFactor</a></code> | <code>java.lang.String</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel">riscLevel</a></code> | <code>java.lang.String</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle">sessionIdle</a></code> | <code>java.lang.Number</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime">sessionLifetime</a></code> | <code>java.lang.Number</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent">sessionPersistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `authtype`<sup>Optional</sup> <a name="authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype"></a>

```java
public java.lang.String getAuthtype();
```

- *Type:* java.lang.String

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors"></a>

```java
public java.util.List<java.lang.String> getBehaviors();
```

- *Type:* java.util.List<java.lang.String>

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `factorSequence`<sup>Optional</sup> <a name="factorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence"></a>

```java
public java.lang.Object getFactorSequence();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>>

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `identityProviderIds`<sup>Optional</sup> <a name="identityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds"></a>

```java
public java.util.List<java.lang.String> getIdentityProviderIds();
```

- *Type:* java.util.List<java.lang.String>

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `mfaLifetime`<sup>Optional</sup> <a name="mfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime"></a>

```java
public java.lang.Number getMfaLifetime();
```

- *Type:* java.lang.Number

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `mfaPrompt`<sup>Optional</sup> <a name="mfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt"></a>

```java
public java.lang.String getMfaPrompt();
```

- *Type:* java.lang.String

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `mfaRememberDevice`<sup>Optional</sup> <a name="mfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice"></a>

```java
public java.lang.Object getMfaRememberDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Remember MFA device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `mfaRequired`<sup>Optional</sup> <a name="mfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired"></a>

```java
public java.lang.Object getMfaRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require MFA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `primaryFactor`<sup>Optional</sup> <a name="primaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor"></a>

```java
public java.lang.String getPrimaryFactor();
```

- *Type:* java.lang.String

Primary factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `riscLevel`<sup>Optional</sup> <a name="riscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel"></a>

```java
public java.lang.String getRiscLevel();
```

- *Type:* java.lang.String

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `sessionIdle`<sup>Optional</sup> <a name="sessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle"></a>

```java
public java.lang.Number getSessionIdle();
```

- *Type:* java.lang.Number

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime"></a>

```java
public java.lang.Number getSessionLifetime();
```

- *Type:* java.lang.Number

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `sessionPersistent`<sup>Optional</sup> <a name="sessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent"></a>

```java
public java.lang.Object getSessionPersistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

### PolicyRuleSignonFactorSequence <a name="PolicyRuleSignonFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonFactorSequence;

PolicyRuleSignonFactorSequence.builder()
    .primaryCriteriaFactorType(java.lang.String)
    .primaryCriteriaProvider(java.lang.String)
//  .secondaryCriteria(IResolvable)
//  .secondaryCriteria(java.util.List<PolicyRuleSignonFactorSequenceSecondaryCriteria>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>java.lang.String</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>java.lang.String</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria">secondaryCriteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>></code> | secondary_criteria block. |

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType"></a>

```java
public java.lang.String getPrimaryCriteriaFactorType();
```

- *Type:* java.lang.String

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_criteria_factor_type PolicyRuleSignon#primary_criteria_factor_type}

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider"></a>

```java
public java.lang.String getPrimaryCriteriaProvider();
```

- *Type:* java.lang.String

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#primary_criteria_provider PolicyRuleSignon#primary_criteria_provider}

---

##### `secondaryCriteria`<sup>Optional</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria"></a>

```java
public java.lang.Object getSecondaryCriteria();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>>

secondary_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#secondary_criteria PolicyRuleSignon#secondary_criteria}

---

### PolicyRuleSignonFactorSequenceSecondaryCriteria <a name="PolicyRuleSignonFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonFactorSequenceSecondaryCriteria;

PolicyRuleSignonFactorSequenceSecondaryCriteria.builder()
    .factorType(java.lang.String)
    .provider(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType">factorType</a></code> | <code>java.lang.String</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider">provider</a></code> | <code>java.lang.String</code> | Factor provider. |

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType"></a>

```java
public java.lang.String getFactorType();
```

- *Type:* java.lang.String

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#factor_type PolicyRuleSignon#factor_type}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_signon#provider PolicyRuleSignon#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleSignonFactorSequenceList <a name="PolicyRuleSignonFactorSequenceList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonFactorSequenceList;

new PolicyRuleSignonFactorSequenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get"></a>

```java
public PolicyRuleSignonFactorSequenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>>

---


### PolicyRuleSignonFactorSequenceOutputReference <a name="PolicyRuleSignonFactorSequenceOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonFactorSequenceOutputReference;

new PolicyRuleSignonFactorSequenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria">putSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria">resetSecondaryCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecondaryCriteria` <a name="putSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria"></a>

```java
public void putSecondaryCriteria(IResolvable OR java.util.List<PolicyRuleSignonFactorSequenceSecondaryCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>>

---

##### `resetSecondaryCriteria` <a name="resetSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```java
public void resetSecondaryCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria">secondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">primaryCriteriaFactorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput">primaryCriteriaProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput">secondaryCriteriaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType">primaryCriteriaFactorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider">primaryCriteriaProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secondaryCriteria`<sup>Required</sup> <a name="secondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria"></a>

```java
public PolicyRuleSignonFactorSequenceSecondaryCriteriaList getSecondaryCriteria();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a>

---

##### `primaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="primaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```java
public java.lang.String getPrimaryCriteriaFactorTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryCriteriaProviderInput`<sup>Optional</sup> <a name="primaryCriteriaProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```java
public java.lang.String getPrimaryCriteriaProviderInput();
```

- *Type:* java.lang.String

---

##### `secondaryCriteriaInput`<sup>Optional</sup> <a name="secondaryCriteriaInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```java
public java.lang.Object getSecondaryCriteriaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>>

---

##### `primaryCriteriaFactorType`<sup>Required</sup> <a name="primaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```java
public java.lang.String getPrimaryCriteriaFactorType();
```

- *Type:* java.lang.String

---

##### `primaryCriteriaProvider`<sup>Required</sup> <a name="primaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```java
public java.lang.String getPrimaryCriteriaProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence">PolicyRuleSignonFactorSequence</a>

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaList <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList;

new PolicyRuleSignonFactorSequenceSecondaryCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get"></a>

```java
public PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>>

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_signon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference;

new PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">factorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType">factorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `factorTypeInput`<sup>Optional</sup> <a name="factorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```java
public java.lang.String getFactorTypeInput();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `factorType`<sup>Required</sup> <a name="factorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```java
public java.lang.String getFactorType();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria">PolicyRuleSignonFactorSequenceSecondaryCriteria</a>

---



