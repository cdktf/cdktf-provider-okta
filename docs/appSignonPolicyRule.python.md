# `appSignonPolicyRule` Submodule <a name="`appSignonPolicyRule` Submodule" id="@cdktf/provider-okta.appSignonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSignonPolicyRule <a name="AppSignonPolicyRule" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_id: str,
  access: str = None,
  constraints: typing.List[str] = None,
  custom_expression: str = None,
  device_assurances_included: typing.List[str] = None,
  device_is_managed: typing.Union[bool, IResolvable] = None,
  device_is_registered: typing.Union[bool, IResolvable] = None,
  factor_mode: str = None,
  groups_excluded: typing.List[str] = None,
  groups_included: typing.List[str] = None,
  id: str = None,
  inactivity_period: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  platform_include: typing.Union[IResolvable, typing.List[AppSignonPolicyRulePlatformInclude]] = None,
  priority: typing.Union[int, float] = None,
  re_authentication_frequency: str = None,
  risk_score: str = None,
  status: str = None,
  type: str = None,
  users_excluded: typing.List[str] = None,
  users_included: typing.List[str] = None,
  user_types_excluded: typing.List[str] = None,
  user_types_included: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.constraints">constraints</a></code> | <code>typing.List[str]</code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.customExpression">custom_expression</a></code> | <code>str</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceAssurancesIncluded">device_assurances_included</a></code> | <code>typing.List[str]</code> | List of device assurance IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsManaged">device_is_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsRegistered">device_is_registered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.factorMode">factor_mode</a></code> | <code>str</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsExcluded">groups_excluded</a></code> | <code>typing.List[str]</code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.inactivityPeriod">inactivity_period</a></code> | <code>str</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.platformInclude">platform_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.reAuthenticationFrequency">re_authentication_frequency</a></code> | <code>str</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.riskScore">risk_score</a></code> | <code>str</code> | The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.type">type</a></code> | <code>str</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersIncluded">users_included</a></code> | <code>typing.List[str]</code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesExcluded">user_types_excluded</a></code> | <code>typing.List[str]</code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesIncluded">user_types_included</a></code> | <code>typing.List[str]</code> | Set of User Type IDs to include. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.name"></a>

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* str

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.access"></a>

- *Type:* str

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.constraints"></a>

- *Type:* typing.List[str]

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `custom_expression`<sup>Optional</sup> <a name="custom_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.customExpression"></a>

- *Type:* str

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `device_assurances_included`<sup>Optional</sup> <a name="device_assurances_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceAssurancesIncluded"></a>

- *Type:* typing.List[str]

List of device assurance IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}

---

##### `device_is_managed`<sup>Optional</sup> <a name="device_is_managed" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsManaged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `device_is_registered`<sup>Optional</sup> <a name="device_is_registered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.deviceIsRegistered"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `factor_mode`<sup>Optional</sup> <a name="factor_mode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.factorMode"></a>

- *Type:* str

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `groups_excluded`<sup>Optional</sup> <a name="groups_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsExcluded"></a>

- *Type:* typing.List[str]

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.groupsIncluded"></a>

- *Type:* typing.List[str]

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivity_period`<sup>Optional</sup> <a name="inactivity_period" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.inactivityPeriod"></a>

- *Type:* str

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkConnection"></a>

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkExcludes"></a>

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.networkIncludes"></a>

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `platform_include`<sup>Optional</sup> <a name="platform_include" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.platformInclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}

---

##### `re_authentication_frequency`<sup>Optional</sup> <a name="re_authentication_frequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.reAuthenticationFrequency"></a>

- *Type:* str

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `risk_score`<sup>Optional</sup> <a name="risk_score" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.riskScore"></a>

- *Type:* str

The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.status"></a>

- *Type:* str

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.type"></a>

- *Type:* str

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersExcluded"></a>

- *Type:* typing.List[str]

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `users_included`<sup>Optional</sup> <a name="users_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.usersIncluded"></a>

- *Type:* typing.List[str]

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `user_types_excluded`<sup>Optional</sup> <a name="user_types_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesExcluded"></a>

- *Type:* typing.List[str]

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `user_types_included`<sup>Optional</sup> <a name="user_types_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.userTypesIncluded"></a>

- *Type:* typing.List[str]

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude">put_platform_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints">reset_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression">reset_custom_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded">reset_device_assurances_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged">reset_device_is_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered">reset_device_is_registered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode">reset_factor_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded">reset_groups_excluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded">reset_groups_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod">reset_inactivity_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection">reset_network_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes">reset_network_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes">reset_network_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude">reset_platform_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency">reset_re_authentication_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore">reset_risk_score</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded">reset_users_excluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded">reset_users_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded">reset_user_types_excluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded">reset_user_types_included</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_platform_include` <a name="put_platform_include" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude"></a>

```python
def put_platform_include(
  value: typing.Union[IResolvable, typing.List[AppSignonPolicyRulePlatformInclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]

---

##### `reset_access` <a name="reset_access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_constraints` <a name="reset_constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints"></a>

```python
def reset_constraints() -> None
```

##### `reset_custom_expression` <a name="reset_custom_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression"></a>

```python
def reset_custom_expression() -> None
```

##### `reset_device_assurances_included` <a name="reset_device_assurances_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceAssurancesIncluded"></a>

```python
def reset_device_assurances_included() -> None
```

##### `reset_device_is_managed` <a name="reset_device_is_managed" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged"></a>

```python
def reset_device_is_managed() -> None
```

##### `reset_device_is_registered` <a name="reset_device_is_registered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered"></a>

```python
def reset_device_is_registered() -> None
```

##### `reset_factor_mode` <a name="reset_factor_mode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode"></a>

```python
def reset_factor_mode() -> None
```

##### `reset_groups_excluded` <a name="reset_groups_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded"></a>

```python
def reset_groups_excluded() -> None
```

##### `reset_groups_included` <a name="reset_groups_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded"></a>

```python
def reset_groups_included() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inactivity_period` <a name="reset_inactivity_period" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod"></a>

```python
def reset_inactivity_period() -> None
```

##### `reset_network_connection` <a name="reset_network_connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection"></a>

```python
def reset_network_connection() -> None
```

##### `reset_network_excludes` <a name="reset_network_excludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes"></a>

```python
def reset_network_excludes() -> None
```

##### `reset_network_includes` <a name="reset_network_includes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes"></a>

```python
def reset_network_includes() -> None
```

##### `reset_platform_include` <a name="reset_platform_include" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude"></a>

```python
def reset_platform_include() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_re_authentication_frequency` <a name="reset_re_authentication_frequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency"></a>

```python
def reset_re_authentication_frequency() -> None
```

##### `reset_risk_score` <a name="reset_risk_score" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetRiskScore"></a>

```python
def reset_risk_score() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_users_excluded` <a name="reset_users_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded"></a>

```python
def reset_users_excluded() -> None
```

##### `reset_users_included` <a name="reset_users_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded"></a>

```python
def reset_users_included() -> None
```

##### `reset_user_types_excluded` <a name="reset_user_types_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded"></a>

```python
def reset_user_types_excluded() -> None
```

##### `reset_user_types_included` <a name="reset_user_types_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded"></a>

```python
def reset_user_types_included() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppSignonPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppSignonPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppSignonPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppSignonPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude">platform_include</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute">system_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput">constraints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput">custom_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput">device_assurances_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput">device_is_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput">device_is_registered_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput">factor_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput">groups_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput">groups_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput">inactivity_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput">network_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput">network_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput">network_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput">platform_include_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput">re_authentication_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput">risk_score_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput">users_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput">users_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput">user_types_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput">user_types_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints">constraints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression">custom_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded">device_assurances_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged">device_is_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered">device_is_registered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode">factor_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded">groups_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod">inactivity_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection">network_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency">re_authentication_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore">risk_score</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded">users_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded">user_types_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded">user_types_included</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `platform_include`<sup>Required</sup> <a name="platform_include" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude"></a>

```python
platform_include: AppSignonPolicyRulePlatformIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a>

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.systemAttribute"></a>

```python
system_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `constraints_input`<sup>Optional</sup> <a name="constraints_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput"></a>

```python
constraints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_expression_input`<sup>Optional</sup> <a name="custom_expression_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput"></a>

```python
custom_expression_input: str
```

- *Type:* str

---

##### `device_assurances_included_input`<sup>Optional</sup> <a name="device_assurances_included_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncludedInput"></a>

```python
device_assurances_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_is_managed_input`<sup>Optional</sup> <a name="device_is_managed_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput"></a>

```python
device_is_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_is_registered_input`<sup>Optional</sup> <a name="device_is_registered_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput"></a>

```python
device_is_registered_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `factor_mode_input`<sup>Optional</sup> <a name="factor_mode_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput"></a>

```python
factor_mode_input: str
```

- *Type:* str

---

##### `groups_excluded_input`<sup>Optional</sup> <a name="groups_excluded_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput"></a>

```python
groups_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_included_input`<sup>Optional</sup> <a name="groups_included_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput"></a>

```python
groups_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inactivity_period_input`<sup>Optional</sup> <a name="inactivity_period_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput"></a>

```python
inactivity_period_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connection_input`<sup>Optional</sup> <a name="network_connection_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput"></a>

```python
network_connection_input: str
```

- *Type:* str

---

##### `network_excludes_input`<sup>Optional</sup> <a name="network_excludes_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput"></a>

```python
network_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes_input`<sup>Optional</sup> <a name="network_includes_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput"></a>

```python
network_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `platform_include_input`<sup>Optional</sup> <a name="platform_include_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput"></a>

```python
platform_include_input: typing.Union[IResolvable, typing.List[AppSignonPolicyRulePlatformInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `re_authentication_frequency_input`<sup>Optional</sup> <a name="re_authentication_frequency_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput"></a>

```python
re_authentication_frequency_input: str
```

- *Type:* str

---

##### `risk_score_input`<sup>Optional</sup> <a name="risk_score_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScoreInput"></a>

```python
risk_score_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `users_excluded_input`<sup>Optional</sup> <a name="users_excluded_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput"></a>

```python
users_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_included_input`<sup>Optional</sup> <a name="users_included_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput"></a>

```python
users_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_types_excluded_input`<sup>Optional</sup> <a name="user_types_excluded_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput"></a>

```python
user_types_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_types_included_input`<sup>Optional</sup> <a name="user_types_included_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput"></a>

```python
user_types_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints"></a>

```python
constraints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_expression`<sup>Required</sup> <a name="custom_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression"></a>

```python
custom_expression: str
```

- *Type:* str

---

##### `device_assurances_included`<sup>Required</sup> <a name="device_assurances_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceAssurancesIncluded"></a>

```python
device_assurances_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_is_managed`<sup>Required</sup> <a name="device_is_managed" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged"></a>

```python
device_is_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_is_registered`<sup>Required</sup> <a name="device_is_registered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered"></a>

```python
device_is_registered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `factor_mode`<sup>Required</sup> <a name="factor_mode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode"></a>

```python
factor_mode: str
```

- *Type:* str

---

##### `groups_excluded`<sup>Required</sup> <a name="groups_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded"></a>

```python
groups_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_included`<sup>Required</sup> <a name="groups_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inactivity_period`<sup>Required</sup> <a name="inactivity_period" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod"></a>

```python
inactivity_period: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connection`<sup>Required</sup> <a name="network_connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

---

##### `network_excludes`<sup>Required</sup> <a name="network_excludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes`<sup>Required</sup> <a name="network_includes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `re_authentication_frequency`<sup>Required</sup> <a name="re_authentication_frequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency"></a>

```python
re_authentication_frequency: str
```

- *Type:* str

---

##### `risk_score`<sup>Required</sup> <a name="risk_score" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.riskScore"></a>

```python
risk_score: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `users_excluded`<sup>Required</sup> <a name="users_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_included`<sup>Required</sup> <a name="users_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded"></a>

```python
users_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_types_excluded`<sup>Required</sup> <a name="user_types_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded"></a>

```python
user_types_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_types_included`<sup>Required</sup> <a name="user_types_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded"></a>

```python
user_types_included: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppSignonPolicyRuleConfig <a name="AppSignonPolicyRuleConfig" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_id: str,
  access: str = None,
  constraints: typing.List[str] = None,
  custom_expression: str = None,
  device_assurances_included: typing.List[str] = None,
  device_is_managed: typing.Union[bool, IResolvable] = None,
  device_is_registered: typing.Union[bool, IResolvable] = None,
  factor_mode: str = None,
  groups_excluded: typing.List[str] = None,
  groups_included: typing.List[str] = None,
  id: str = None,
  inactivity_period: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  platform_include: typing.Union[IResolvable, typing.List[AppSignonPolicyRulePlatformInclude]] = None,
  priority: typing.Union[int, float] = None,
  re_authentication_frequency: str = None,
  risk_score: str = None,
  status: str = None,
  type: str = None,
  users_excluded: typing.List[str] = None,
  users_included: typing.List[str] = None,
  user_types_excluded: typing.List[str] = None,
  user_types_included: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId">policy_id</a></code> | <code>str</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access">access</a></code> | <code>str</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints">constraints</a></code> | <code>typing.List[str]</code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression">custom_expression</a></code> | <code>str</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded">device_assurances_included</a></code> | <code>typing.List[str]</code> | List of device assurance IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged">device_is_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered">device_is_registered</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode">factor_mode</a></code> | <code>str</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded">groups_excluded</a></code> | <code>typing.List[str]</code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod">inactivity_period</a></code> | <code>str</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude">platform_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency">re_authentication_frequency</a></code> | <code>str</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore">risk_score</a></code> | <code>str</code> | The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status">status</a></code> | <code>str</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type">type</a></code> | <code>str</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded">users_included</a></code> | <code>typing.List[str]</code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded">user_types_excluded</a></code> | <code>typing.List[str]</code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded">user_types_included</a></code> | <code>typing.List[str]</code> | Set of User Type IDs to include. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access"></a>

```python
access: str
```

- *Type:* str

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints"></a>

```python
constraints: typing.List[str]
```

- *Type:* typing.List[str]

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `custom_expression`<sup>Optional</sup> <a name="custom_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression"></a>

```python
custom_expression: str
```

- *Type:* str

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `device_assurances_included`<sup>Optional</sup> <a name="device_assurances_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceAssurancesIncluded"></a>

```python
device_assurances_included: typing.List[str]
```

- *Type:* typing.List[str]

List of device assurance IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#device_assurances_included AppSignonPolicyRule#device_assurances_included}

---

##### `device_is_managed`<sup>Optional</sup> <a name="device_is_managed" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged"></a>

```python
device_is_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `device_is_registered`<sup>Optional</sup> <a name="device_is_registered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered"></a>

```python
device_is_registered: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `factor_mode`<sup>Optional</sup> <a name="factor_mode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode"></a>

```python
factor_mode: str
```

- *Type:* str

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `groups_excluded`<sup>Optional</sup> <a name="groups_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded"></a>

```python
groups_excluded: typing.List[str]
```

- *Type:* typing.List[str]

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivity_period`<sup>Optional</sup> <a name="inactivity_period" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod"></a>

```python
inactivity_period: str
```

- *Type:* str

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `platform_include`<sup>Optional</sup> <a name="platform_include" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude"></a>

```python
platform_include: typing.Union[IResolvable, typing.List[AppSignonPolicyRulePlatformInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}

---

##### `re_authentication_frequency`<sup>Optional</sup> <a name="re_authentication_frequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency"></a>

```python
re_authentication_frequency: str
```

- *Type:* str

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `risk_score`<sup>Optional</sup> <a name="risk_score" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.riskScore"></a>

```python
risk_score: str
```

- *Type:* str

The risk score specifies a particular level of risk to match on: ANY, LOW, MEDIUM, HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#risk_score AppSignonPolicyRule#risk_score}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `users_included`<sup>Optional</sup> <a name="users_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded"></a>

```python
users_included: typing.List[str]
```

- *Type:* typing.List[str]

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `user_types_excluded`<sup>Optional</sup> <a name="user_types_excluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded"></a>

```python
user_types_excluded: typing.List[str]
```

- *Type:* typing.List[str]

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `user_types_included`<sup>Optional</sup> <a name="user_types_included" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded"></a>

```python
user_types_included: typing.List[str]
```

- *Type:* typing.List[str]

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

### AppSignonPolicyRulePlatformInclude <a name="AppSignonPolicyRulePlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRulePlatformInclude(
  os_expression: str = None,
  os_type: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression">os_expression</a></code> | <code>str</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}. |

---

##### `os_expression`<sup>Optional</sup> <a name="os_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression"></a>

```python
os_expression: str
```

- *Type:* str

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSignonPolicyRulePlatformIncludeList <a name="AppSignonPolicyRulePlatformIncludeList" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppSignonPolicyRulePlatformIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppSignonPolicyRulePlatformInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]]

---


### AppSignonPolicyRulePlatformIncludeOutputReference <a name="AppSignonPolicyRulePlatformIncludeOutputReference" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_signon_policy_rule

appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression">reset_os_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_os_expression` <a name="reset_os_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression"></a>

```python
def reset_os_expression() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput">os_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression">os_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_expression_input`<sup>Optional</sup> <a name="os_expression_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput"></a>

```python
os_expression_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `os_expression`<sup>Required</sup> <a name="os_expression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression"></a>

```python
os_expression: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppSignonPolicyRulePlatformInclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>]

---



