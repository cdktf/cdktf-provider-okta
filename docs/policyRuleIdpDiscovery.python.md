# `okta_policy_rule_idp_discovery`

Refer to the Terraform Registory for docs: [`okta_policy_rule_idp_discovery`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery).

# `policyRuleIdpDiscovery` Submodule <a name="`policyRuleIdpDiscovery` Submodule" id="@cdktf/provider-okta.policyRuleIdpDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleIdpDiscovery <a name="PolicyRuleIdpDiscovery" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery okta_policy_rule_idp_discovery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery(
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
  app_exclude: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppExclude]] = None,
  app_include: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppInclude]] = None,
  id: str = None,
  idp_id: str = None,
  idp_type: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  platform_include: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryPlatformInclude]] = None,
  policy_id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  user_identifier_attribute: str = None,
  user_identifier_patterns: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryUserIdentifierPatterns]] = None,
  user_identifier_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appExclude">app_exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appInclude">app_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpId">idp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpType">idp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.platformInclude">platform_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierAttribute">user_identifier_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierPatterns">user_identifier_patterns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]</code> | user_identifier_patterns block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierType">user_identifier_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.name"></a>

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}

---

##### `app_exclude`<sup>Optional</sup> <a name="app_exclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appExclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}

---

##### `app_include`<sup>Optional</sup> <a name="app_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appInclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_id`<sup>Optional</sup> <a name="idp_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}.

---

##### `idp_type`<sup>Optional</sup> <a name="idp_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}.

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkConnection"></a>

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkExcludes"></a>

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkIncludes"></a>

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}

---

##### `platform_include`<sup>Optional</sup> <a name="platform_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.platformInclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.policyId"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.status"></a>

- *Type:* str

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}

---

##### `user_identifier_attribute`<sup>Optional</sup> <a name="user_identifier_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}.

---

##### `user_identifier_patterns`<sup>Optional</sup> <a name="user_identifier_patterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierPatterns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]

user_identifier_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}

---

##### `user_identifier_type`<sup>Optional</sup> <a name="user_identifier_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude">put_app_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude">put_app_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude">put_platform_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns">put_user_identifier_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude">reset_app_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude">reset_app_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpId">reset_idp_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpType">reset_idp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection">reset_network_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes">reset_network_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes">reset_network_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude">reset_platform_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute">reset_user_identifier_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns">reset_user_identifier_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType">reset_user_identifier_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_app_exclude` <a name="put_app_exclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude"></a>

```python
def put_app_exclude(
  value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppExclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]

---

##### `put_app_include` <a name="put_app_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude"></a>

```python
def put_app_include(
  value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppInclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]

---

##### `put_platform_include` <a name="put_platform_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude"></a>

```python
def put_platform_include(
  value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryPlatformInclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]

---

##### `put_user_identifier_patterns` <a name="put_user_identifier_patterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns"></a>

```python
def put_user_identifier_patterns(
  value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryUserIdentifierPatterns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]

---

##### `reset_app_exclude` <a name="reset_app_exclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude"></a>

```python
def reset_app_exclude() -> None
```

##### `reset_app_include` <a name="reset_app_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude"></a>

```python
def reset_app_include() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_id` <a name="reset_idp_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpId"></a>

```python
def reset_idp_id() -> None
```

##### `reset_idp_type` <a name="reset_idp_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpType"></a>

```python
def reset_idp_type() -> None
```

##### `reset_network_connection` <a name="reset_network_connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection"></a>

```python
def reset_network_connection() -> None
```

##### `reset_network_excludes` <a name="reset_network_excludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes"></a>

```python
def reset_network_excludes() -> None
```

##### `reset_network_includes` <a name="reset_network_includes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes"></a>

```python
def reset_network_includes() -> None
```

##### `reset_platform_include` <a name="reset_platform_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude"></a>

```python
def reset_platform_include() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_user_identifier_attribute` <a name="reset_user_identifier_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute"></a>

```python
def reset_user_identifier_attribute() -> None
```

##### `reset_user_identifier_patterns` <a name="reset_user_identifier_patterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns"></a>

```python
def reset_user_identifier_patterns() -> None
```

##### `reset_user_identifier_type` <a name="reset_user_identifier_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType"></a>

```python
def reset_user_identifier_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyRuleIdpDiscovery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyRuleIdpDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleIdpDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude">app_exclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude">app_include</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude">platform_include</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns">user_identifier_patterns</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput">app_exclude_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput">app_include_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpIdInput">idp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpTypeInput">idp_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput">network_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput">network_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput">network_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput">platform_include_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput">user_identifier_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput">user_identifier_patterns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput">user_identifier_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpId">idp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpType">idp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection">network_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute">user_identifier_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType">user_identifier_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_exclude`<sup>Required</sup> <a name="app_exclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude"></a>

```python
app_exclude: PolicyRuleIdpDiscoveryAppExcludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a>

---

##### `app_include`<sup>Required</sup> <a name="app_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude"></a>

```python
app_include: PolicyRuleIdpDiscoveryAppIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a>

---

##### `platform_include`<sup>Required</sup> <a name="platform_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude"></a>

```python
platform_include: PolicyRuleIdpDiscoveryPlatformIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a>

---

##### `user_identifier_patterns`<sup>Required</sup> <a name="user_identifier_patterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns"></a>

```python
user_identifier_patterns: PolicyRuleIdpDiscoveryUserIdentifierPatternsList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a>

---

##### `app_exclude_input`<sup>Optional</sup> <a name="app_exclude_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput"></a>

```python
app_exclude_input: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]

---

##### `app_include_input`<sup>Optional</sup> <a name="app_include_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput"></a>

```python
app_include_input: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_id_input`<sup>Optional</sup> <a name="idp_id_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpIdInput"></a>

```python
idp_id_input: str
```

- *Type:* str

---

##### `idp_type_input`<sup>Optional</sup> <a name="idp_type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpTypeInput"></a>

```python
idp_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connection_input`<sup>Optional</sup> <a name="network_connection_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput"></a>

```python
network_connection_input: str
```

- *Type:* str

---

##### `network_excludes_input`<sup>Optional</sup> <a name="network_excludes_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput"></a>

```python
network_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes_input`<sup>Optional</sup> <a name="network_includes_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput"></a>

```python
network_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `platform_include_input`<sup>Optional</sup> <a name="platform_include_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput"></a>

```python
platform_include_input: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryPlatformInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `user_identifier_attribute_input`<sup>Optional</sup> <a name="user_identifier_attribute_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput"></a>

```python
user_identifier_attribute_input: str
```

- *Type:* str

---

##### `user_identifier_patterns_input`<sup>Optional</sup> <a name="user_identifier_patterns_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput"></a>

```python
user_identifier_patterns_input: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryUserIdentifierPatterns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]

---

##### `user_identifier_type_input`<sup>Optional</sup> <a name="user_identifier_type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput"></a>

```python
user_identifier_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

---

##### `idp_type`<sup>Required</sup> <a name="idp_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpType"></a>

```python
idp_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connection`<sup>Required</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

---

##### `network_excludes`<sup>Required</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes`<sup>Required</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_identifier_attribute`<sup>Required</sup> <a name="user_identifier_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute"></a>

```python
user_identifier_attribute: str
```

- *Type:* str

---

##### `user_identifier_type`<sup>Required</sup> <a name="user_identifier_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType"></a>

```python
user_identifier_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleIdpDiscoveryAppExclude <a name="PolicyRuleIdpDiscoveryAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude(
  type: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryAppInclude <a name="PolicyRuleIdpDiscoveryAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude(
  type: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryConfig <a name="PolicyRuleIdpDiscoveryConfig" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  app_exclude: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppExclude]] = None,
  app_include: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppInclude]] = None,
  id: str = None,
  idp_id: str = None,
  idp_type: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  platform_include: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryPlatformInclude]] = None,
  policy_id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  user_identifier_attribute: str = None,
  user_identifier_patterns: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryUserIdentifierPatterns]] = None,
  user_identifier_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude">app_exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude">app_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpId">idp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpType">idp_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude">platform_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status">status</a></code> | <code>str</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute">user_identifier_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns">user_identifier_patterns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]</code> | user_identifier_patterns block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType">user_identifier_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}

---

##### `app_exclude`<sup>Optional</sup> <a name="app_exclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude"></a>

```python
app_exclude: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}

---

##### `app_include`<sup>Optional</sup> <a name="app_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude"></a>

```python
app_include: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_id`<sup>Optional</sup> <a name="idp_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}.

---

##### `idp_type`<sup>Optional</sup> <a name="idp_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpType"></a>

```python
idp_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}.

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}

---

##### `platform_include`<sup>Optional</sup> <a name="platform_include" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude"></a>

```python
platform_include: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryPlatformInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}

---

##### `user_identifier_attribute`<sup>Optional</sup> <a name="user_identifier_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute"></a>

```python
user_identifier_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}.

---

##### `user_identifier_patterns`<sup>Optional</sup> <a name="user_identifier_patterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns"></a>

```python
user_identifier_patterns: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryUserIdentifierPatterns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]

user_identifier_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}

---

##### `user_identifier_type`<sup>Optional</sup> <a name="user_identifier_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType"></a>

```python
user_identifier_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}.

---

### PolicyRuleIdpDiscoveryPlatformInclude <a name="PolicyRuleIdpDiscoveryPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude(
  os_expression: str = None,
  os_type: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression">os_expression</a></code> | <code>str</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |

---

##### `os_expression`<sup>Optional</sup> <a name="os_expression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression"></a>

```python
os_expression: str
```

- *Type:* str

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#os_expression PolicyRuleIdpDiscovery#os_expression}

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

### PolicyRuleIdpDiscoveryUserIdentifierPatterns <a name="PolicyRuleIdpDiscoveryUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns(
  match_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType">match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}. |

---

##### `match_type`<sup>Optional</sup> <a name="match_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleIdpDiscoveryAppExcludeList <a name="PolicyRuleIdpDiscoveryAppExcludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleIdpDiscoveryAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]]

---


### PolicyRuleIdpDiscoveryAppExcludeOutputReference <a name="PolicyRuleIdpDiscoveryAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleIdpDiscoveryAppExclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>]

---


### PolicyRuleIdpDiscoveryAppIncludeList <a name="PolicyRuleIdpDiscoveryAppIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleIdpDiscoveryAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryAppInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]]

---


### PolicyRuleIdpDiscoveryAppIncludeOutputReference <a name="PolicyRuleIdpDiscoveryAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleIdpDiscoveryAppInclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>]

---


### PolicyRuleIdpDiscoveryPlatformIncludeList <a name="PolicyRuleIdpDiscoveryPlatformIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleIdpDiscoveryPlatformIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryPlatformInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]]

---


### PolicyRuleIdpDiscoveryPlatformIncludeOutputReference <a name="PolicyRuleIdpDiscoveryPlatformIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression">reset_os_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_os_expression` <a name="reset_os_expression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression"></a>

```python
def reset_os_expression() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput">os_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression">os_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_expression_input`<sup>Optional</sup> <a name="os_expression_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput"></a>

```python
os_expression_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `os_expression`<sup>Required</sup> <a name="os_expression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression"></a>

```python
os_expression: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleIdpDiscoveryPlatformInclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>]

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsList <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleIdpDiscoveryUserIdentifierPatterns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]]

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_idp_discovery

policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType">reset_match_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_match_type` <a name="reset_match_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType"></a>

```python
def reset_match_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleIdpDiscoveryUserIdentifierPatterns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>]

---



