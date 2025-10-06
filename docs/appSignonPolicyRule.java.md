# `appSignonPolicyRule` Submodule <a name="`appSignonPolicyRule` Submodule" id="@cdktf/provider-okta.appSignonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSignonPolicyRule <a name="AppSignonPolicyRule" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRule;

AppSignonPolicyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyId(java.lang.String)
//  .access(java.lang.String)
//  .chains(java.util.List<java.lang.String>)
//  .constraints(java.util.List<java.lang.String>)
//  .customExpression(java.lang.String)
//  .deviceAssurancesIncluded(java.util.List<java.lang.String>)
//  .deviceIsManaged(java.lang.Boolean|IResolvable)
//  .deviceIsRegistered(java.lang.Boolean|IResolvable)
//  .factorMode(java.lang.String)
//  .groupsExcluded(java.util.List<java.lang.String>)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inactivityPeriod(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .platformInclude(IResolvable|java.util.List<AppSignonPolicyRulePlatformInclude>)
//  .priority(java.lang.Number)
//  .reAuthenticationFrequency(java.lang.String)
//  .riskScore(java.lang.String)
//  .status(java.lang.String)
//  .type(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
//  .usersIncluded(java.util.List<java.lang.String>)
//  .userTypesExcluded(java.util.List<java.lang.String>)
//  .userTypesIncluded(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.chains">chains</a></code> | <code>java.util.List<java.lang.String></code> | Use with verification method = `AUTH_METHOD_CHAIN` only. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.constraints">constraints</a></code> | <code>java.util.List<java.lang.String></code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.customExpression">customExpression</a></code> | <code>java.lang.String</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceAssurancesIncluded">deviceAssurancesIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of device assurance IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsManaged">deviceIsManaged</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsRegistered">deviceIsRegistered</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.factorMode">factorMode</a></code> | <code>java.lang.String</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsExcluded">groupsExcluded</a></code> | <code>java.util.List<java.lang.String></code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.inactivityPeriod">inactivityPeriod</a></code> | <code>java.lang.String</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.platformInclude">platformInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>></code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.reAuthenticationFrequency">reAuthenticationFrequency</a></code> | <code>java.lang.String</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.riskScore">riskScore</a></code> | <code>java.lang.String</code> | The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersIncluded">usersIncluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesExcluded">userTypesExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesIncluded">userTypesIncluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User Type IDs to include. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.access"></a>

- *Type:* java.lang.String

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `chains`<sup>Optional</sup> <a name="chains" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.chains"></a>

- *Type:* java.util.List<java.lang.String>

Use with verification method = `AUTH_METHOD_CHAIN` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#chains AppSignonPolicyRule#chains}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.constraints"></a>

- *Type:* java.util.List<java.lang.String>

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `customExpression`<sup>Optional</sup> <a name="customExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.customExpression"></a>

- *Type:* java.lang.String

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `deviceAssurancesIncluded`<sup>Optional</sup> <a name="deviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceAssurancesIncluded"></a>

- *Type:* java.util.List<java.lang.String>

List of device assurance IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}

---

##### `deviceIsManaged`<sup>Optional</sup> <a name="deviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsManaged"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `deviceIsRegistered`<sup>Optional</sup> <a name="deviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsRegistered"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `factorMode`<sup>Optional</sup> <a name="factorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.factorMode"></a>

- *Type:* java.lang.String

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `groupsExcluded`<sup>Optional</sup> <a name="groupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsExcluded"></a>

- *Type:* java.util.List<java.lang.String>

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsIncluded"></a>

- *Type:* java.util.List<java.lang.String>

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivityPeriod`<sup>Optional</sup> <a name="inactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.inactivityPeriod"></a>

- *Type:* java.lang.String

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `platformInclude`<sup>Optional</sup> <a name="platformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.platformInclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>>

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}

---

##### `reAuthenticationFrequency`<sup>Optional</sup> <a name="reAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.reAuthenticationFrequency"></a>

- *Type:* java.lang.String

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `riskScore`<sup>Optional</sup> <a name="riskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.riskScore"></a>

- *Type:* java.lang.String

The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `usersIncluded`<sup>Optional</sup> <a name="usersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersIncluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `userTypesExcluded`<sup>Optional</sup> <a name="userTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `userTypesIncluded`<sup>Optional</sup> <a name="userTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesIncluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude">putPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetChains">resetChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression">resetCustomExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded">resetDeviceAssurancesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged">resetDeviceIsManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered">resetDeviceIsRegistered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode">resetFactorMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded">resetGroupsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod">resetInactivityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude">resetPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency">resetReAuthenticationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore">resetRiskScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded">resetUsersIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded">resetUserTypesExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded">resetUserTypesIncluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlatformInclude` <a name="putPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude"></a>

```java
public void putPlatformInclude(IResolvable|java.util.List<AppSignonPolicyRulePlatformInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>>

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetChains` <a name="resetChains" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetChains"></a>

```java
public void resetChains()
```

##### `resetConstraints` <a name="resetConstraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints"></a>

```java
public void resetConstraints()
```

##### `resetCustomExpression` <a name="resetCustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression"></a>

```java
public void resetCustomExpression()
```

##### `resetDeviceAssurancesIncluded` <a name="resetDeviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded"></a>

```java
public void resetDeviceAssurancesIncluded()
```

##### `resetDeviceIsManaged` <a name="resetDeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged"></a>

```java
public void resetDeviceIsManaged()
```

##### `resetDeviceIsRegistered` <a name="resetDeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered"></a>

```java
public void resetDeviceIsRegistered()
```

##### `resetFactorMode` <a name="resetFactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode"></a>

```java
public void resetFactorMode()
```

##### `resetGroupsExcluded` <a name="resetGroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded"></a>

```java
public void resetGroupsExcluded()
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded"></a>

```java
public void resetGroupsIncluded()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetInactivityPeriod` <a name="resetInactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod"></a>

```java
public void resetInactivityPeriod()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPlatformInclude` <a name="resetPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude"></a>

```java
public void resetPlatformInclude()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetReAuthenticationFrequency` <a name="resetReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency"></a>

```java
public void resetReAuthenticationFrequency()
```

##### `resetRiskScore` <a name="resetRiskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore"></a>

```java
public void resetRiskScore()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType"></a>

```java
public void resetType()
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded"></a>

```java
public void resetUsersExcluded()
```

##### `resetUsersIncluded` <a name="resetUsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded"></a>

```java
public void resetUsersIncluded()
```

##### `resetUserTypesExcluded` <a name="resetUserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded"></a>

```java
public void resetUserTypesExcluded()
```

##### `resetUserTypesIncluded` <a name="resetUserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded"></a>

```java
public void resetUserTypesIncluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRule;

AppSignonPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRule;

AppSignonPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRule;

AppSignonPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRule;

AppSignonPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppSignonPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppSignonPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppSignonPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppSignonPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude">platformInclude</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute">systemAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.chainsInput">chainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput">constraintsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput">customExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput">deviceAssurancesIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput">deviceIsManagedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput">deviceIsRegisteredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput">factorModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput">groupsExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput">inactivityPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput">platformIncludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput">reAuthenticationFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput">riskScoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput">usersIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput">userTypesExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput">userTypesIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.chains">chains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints">constraints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression">customExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded">deviceAssurancesIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged">deviceIsManaged</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered">deviceIsRegistered</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode">factorMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded">groupsExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod">inactivityPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency">reAuthenticationFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore">riskScore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded">usersIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded">userTypesExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded">userTypesIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `platformInclude`<sup>Required</sup> <a name="platformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude"></a>

```java
public AppSignonPolicyRulePlatformIncludeList getPlatformInclude();
```

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a>

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute"></a>

```java
public IResolvable getSystemAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `chainsInput`<sup>Optional</sup> <a name="chainsInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.chainsInput"></a>

```java
public java.util.List<java.lang.String> getChainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput"></a>

```java
public java.util.List<java.lang.String> getConstraintsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customExpressionInput`<sup>Optional</sup> <a name="customExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput"></a>

```java
public java.lang.String getCustomExpressionInput();
```

- *Type:* java.lang.String

---

##### `deviceAssurancesIncludedInput`<sup>Optional</sup> <a name="deviceAssurancesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput"></a>

```java
public java.util.List<java.lang.String> getDeviceAssurancesIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deviceIsManagedInput`<sup>Optional</sup> <a name="deviceIsManagedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeviceIsManagedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `deviceIsRegisteredInput`<sup>Optional</sup> <a name="deviceIsRegisteredInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput"></a>

```java
public java.lang.Boolean|IResolvable getDeviceIsRegisteredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `factorModeInput`<sup>Optional</sup> <a name="factorModeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput"></a>

```java
public java.lang.String getFactorModeInput();
```

- *Type:* java.lang.String

---

##### `groupsExcludedInput`<sup>Optional</sup> <a name="groupsExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput"></a>

```java
public java.util.List<java.lang.String> getGroupsExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput"></a>

```java
public java.util.List<java.lang.String> getGroupsIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inactivityPeriodInput`<sup>Optional</sup> <a name="inactivityPeriodInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput"></a>

```java
public java.lang.String getInactivityPeriodInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `platformIncludeInput`<sup>Optional</sup> <a name="platformIncludeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput"></a>

```java
public IResolvable|java.util.List<AppSignonPolicyRulePlatformInclude> getPlatformIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `reAuthenticationFrequencyInput`<sup>Optional</sup> <a name="reAuthenticationFrequencyInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput"></a>

```java
public java.lang.String getReAuthenticationFrequencyInput();
```

- *Type:* java.lang.String

---

##### `riskScoreInput`<sup>Optional</sup> <a name="riskScoreInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput"></a>

```java
public java.lang.String getRiskScoreInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usersIncludedInput`<sup>Optional</sup> <a name="usersIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userTypesExcludedInput`<sup>Optional</sup> <a name="userTypesExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUserTypesExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userTypesIncludedInput`<sup>Optional</sup> <a name="userTypesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput"></a>

```java
public java.util.List<java.lang.String> getUserTypesIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `chains`<sup>Required</sup> <a name="chains" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.chains"></a>

```java
public java.util.List<java.lang.String> getChains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints"></a>

```java
public java.util.List<java.lang.String> getConstraints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customExpression`<sup>Required</sup> <a name="customExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression"></a>

```java
public java.lang.String getCustomExpression();
```

- *Type:* java.lang.String

---

##### `deviceAssurancesIncluded`<sup>Required</sup> <a name="deviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded"></a>

```java
public java.util.List<java.lang.String> getDeviceAssurancesIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deviceIsManaged`<sup>Required</sup> <a name="deviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged"></a>

```java
public java.lang.Boolean|IResolvable getDeviceIsManaged();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `deviceIsRegistered`<sup>Required</sup> <a name="deviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered"></a>

```java
public java.lang.Boolean|IResolvable getDeviceIsRegistered();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `factorMode`<sup>Required</sup> <a name="factorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode"></a>

```java
public java.lang.String getFactorMode();
```

- *Type:* java.lang.String

---

##### `groupsExcluded`<sup>Required</sup> <a name="groupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded"></a>

```java
public java.util.List<java.lang.String> getGroupsExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inactivityPeriod`<sup>Required</sup> <a name="inactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod"></a>

```java
public java.lang.String getInactivityPeriod();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `reAuthenticationFrequency`<sup>Required</sup> <a name="reAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency"></a>

```java
public java.lang.String getReAuthenticationFrequency();
```

- *Type:* java.lang.String

---

##### `riskScore`<sup>Required</sup> <a name="riskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore"></a>

```java
public java.lang.String getRiskScore();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usersIncluded`<sup>Required</sup> <a name="usersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded"></a>

```java
public java.util.List<java.lang.String> getUsersIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userTypesExcluded`<sup>Required</sup> <a name="userTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded"></a>

```java
public java.util.List<java.lang.String> getUserTypesExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userTypesIncluded`<sup>Required</sup> <a name="userTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded"></a>

```java
public java.util.List<java.lang.String> getUserTypesIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppSignonPolicyRuleConfig <a name="AppSignonPolicyRuleConfig" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRuleConfig;

AppSignonPolicyRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyId(java.lang.String)
//  .access(java.lang.String)
//  .chains(java.util.List<java.lang.String>)
//  .constraints(java.util.List<java.lang.String>)
//  .customExpression(java.lang.String)
//  .deviceAssurancesIncluded(java.util.List<java.lang.String>)
//  .deviceIsManaged(java.lang.Boolean|IResolvable)
//  .deviceIsRegistered(java.lang.Boolean|IResolvable)
//  .factorMode(java.lang.String)
//  .groupsExcluded(java.util.List<java.lang.String>)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inactivityPeriod(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .platformInclude(IResolvable|java.util.List<AppSignonPolicyRulePlatformInclude>)
//  .priority(java.lang.Number)
//  .reAuthenticationFrequency(java.lang.String)
//  .riskScore(java.lang.String)
//  .status(java.lang.String)
//  .type(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
//  .usersIncluded(java.util.List<java.lang.String>)
//  .userTypesExcluded(java.util.List<java.lang.String>)
//  .userTypesIncluded(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.chains">chains</a></code> | <code>java.util.List<java.lang.String></code> | Use with verification method = `AUTH_METHOD_CHAIN` only. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints">constraints</a></code> | <code>java.util.List<java.lang.String></code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression">customExpression</a></code> | <code>java.lang.String</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded">deviceAssurancesIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of device assurance IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged">deviceIsManaged</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered">deviceIsRegistered</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode">factorMode</a></code> | <code>java.lang.String</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded">groupsExcluded</a></code> | <code>java.util.List<java.lang.String></code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod">inactivityPeriod</a></code> | <code>java.lang.String</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude">platformInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>></code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency">reAuthenticationFrequency</a></code> | <code>java.lang.String</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore">riskScore</a></code> | <code>java.lang.String</code> | The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded">usersIncluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded">userTypesExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded">userTypesIncluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User Type IDs to include. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `chains`<sup>Optional</sup> <a name="chains" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.chains"></a>

```java
public java.util.List<java.lang.String> getChains();
```

- *Type:* java.util.List<java.lang.String>

Use with verification method = `AUTH_METHOD_CHAIN` only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#chains AppSignonPolicyRule#chains}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints"></a>

```java
public java.util.List<java.lang.String> getConstraints();
```

- *Type:* java.util.List<java.lang.String>

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `customExpression`<sup>Optional</sup> <a name="customExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression"></a>

```java
public java.lang.String getCustomExpression();
```

- *Type:* java.lang.String

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `deviceAssurancesIncluded`<sup>Optional</sup> <a name="deviceAssurancesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded"></a>

```java
public java.util.List<java.lang.String> getDeviceAssurancesIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of device assurance IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}

---

##### `deviceIsManaged`<sup>Optional</sup> <a name="deviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged"></a>

```java
public java.lang.Boolean|IResolvable getDeviceIsManaged();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `deviceIsRegistered`<sup>Optional</sup> <a name="deviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered"></a>

```java
public java.lang.Boolean|IResolvable getDeviceIsRegistered();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `factorMode`<sup>Optional</sup> <a name="factorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode"></a>

```java
public java.lang.String getFactorMode();
```

- *Type:* java.lang.String

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `groupsExcluded`<sup>Optional</sup> <a name="groupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded"></a>

```java
public java.util.List<java.lang.String> getGroupsExcluded();
```

- *Type:* java.util.List<java.lang.String>

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivityPeriod`<sup>Optional</sup> <a name="inactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod"></a>

```java
public java.lang.String getInactivityPeriod();
```

- *Type:* java.lang.String

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `platformInclude`<sup>Optional</sup> <a name="platformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude"></a>

```java
public IResolvable|java.util.List<AppSignonPolicyRulePlatformInclude> getPlatformInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>>

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}

---

##### `reAuthenticationFrequency`<sup>Optional</sup> <a name="reAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency"></a>

```java
public java.lang.String getReAuthenticationFrequency();
```

- *Type:* java.lang.String

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `riskScore`<sup>Optional</sup> <a name="riskScore" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore"></a>

```java
public java.lang.String getRiskScore();
```

- *Type:* java.lang.String

The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `usersIncluded`<sup>Optional</sup> <a name="usersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded"></a>

```java
public java.util.List<java.lang.String> getUsersIncluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `userTypesExcluded`<sup>Optional</sup> <a name="userTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded"></a>

```java
public java.util.List<java.lang.String> getUserTypesExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `userTypesIncluded`<sup>Optional</sup> <a name="userTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded"></a>

```java
public java.util.List<java.lang.String> getUserTypesIncluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

### AppSignonPolicyRulePlatformInclude <a name="AppSignonPolicyRulePlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRulePlatformInclude;

AppSignonPolicyRulePlatformInclude.builder()
//  .osExpression(java.lang.String)
//  .osType(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression">osExpression</a></code> | <code>java.lang.String</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}. |

---

##### `osExpression`<sup>Optional</sup> <a name="osExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression"></a>

```java
public java.lang.String getOsExpression();
```

- *Type:* java.lang.String

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSignonPolicyRulePlatformIncludeList <a name="AppSignonPolicyRulePlatformIncludeList" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRulePlatformIncludeList;

new AppSignonPolicyRulePlatformIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get"></a>

```java
public AppSignonPolicyRulePlatformIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppSignonPolicyRulePlatformInclude> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>>

---


### AppSignonPolicyRulePlatformIncludeOutputReference <a name="AppSignonPolicyRulePlatformIncludeOutputReference" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_signon_policy_rule.AppSignonPolicyRulePlatformIncludeOutputReference;

new AppSignonPolicyRulePlatformIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression">resetOsExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOsExpression` <a name="resetOsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression"></a>

```java
public void resetOsExpression()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput">osExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression">osExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osExpressionInput`<sup>Optional</sup> <a name="osExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput"></a>

```java
public java.lang.String getOsExpressionInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `osExpression`<sup>Required</sup> <a name="osExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression"></a>

```java
public java.lang.String getOsExpression();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue"></a>

```java
public IResolvable|AppSignonPolicyRulePlatformInclude getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>

---



