# `dataOktaNetworkZone` Submodule <a name="`dataOktaNetworkZone` Submodule" id="@cdktf/provider-okta.dataOktaNetworkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaNetworkZone <a name="DataOktaNetworkZone" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_network_zone

dataOktaNetworkZone.DataOktaNetworkZone(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dynamic_locations_exclude: typing.List[str] = None,
  id: str = None,
  ip_service_categories_exclude: typing.List[str] = None,
  ip_service_categories_include: typing.List[str] = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.dynamicLocationsExclude">dynamic_locations_exclude</a></code> | <code>typing.List[str]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id">id</a></code> | <code>str</code> | ID of the network zone to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.ipServiceCategoriesExclude">ip_service_categories_exclude</a></code> | <code>typing.List[str]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.ipServiceCategoriesInclude">ip_service_categories_include</a></code> | <code>typing.List[str]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the network zone to retrieve, conflicts with `id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dynamic_locations_exclude`<sup>Optional</sup> <a name="dynamic_locations_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.dynamicLocationsExclude"></a>

- *Type:* typing.List[str]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#dynamic_locations_exclude DataOktaNetworkZone#dynamic_locations_exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id"></a>

- *Type:* str

ID of the network zone to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#id DataOktaNetworkZone#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_service_categories_exclude`<sup>Optional</sup> <a name="ip_service_categories_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.ipServiceCategoriesExclude"></a>

- *Type:* typing.List[str]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#ip_service_categories_exclude DataOktaNetworkZone#ip_service_categories_exclude}

---

##### `ip_service_categories_include`<sup>Optional</sup> <a name="ip_service_categories_include" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.ipServiceCategoriesInclude"></a>

- *Type:* typing.List[str]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#ip_service_categories_include DataOktaNetworkZone#ip_service_categories_include}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.name"></a>

- *Type:* str

Name of the network zone to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#name DataOktaNetworkZone#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetDynamicLocationsExclude">reset_dynamic_locations_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesExclude">reset_ip_service_categories_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesInclude">reset_ip_service_categories_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_dynamic_locations_exclude` <a name="reset_dynamic_locations_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetDynamicLocationsExclude"></a>

```python
def reset_dynamic_locations_exclude() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_service_categories_exclude` <a name="reset_ip_service_categories_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesExclude"></a>

```python
def reset_ip_service_categories_exclude() -> None
```

##### `reset_ip_service_categories_include` <a name="reset_ip_service_categories_include" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesInclude"></a>

```python
def reset_ip_service_categories_include() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_network_zone

dataOktaNetworkZone.DataOktaNetworkZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_network_zone

dataOktaNetworkZone.DataOktaNetworkZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_network_zone

dataOktaNetworkZone.DataOktaNetworkZone.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_network_zone

dataOktaNetworkZone.DataOktaNetworkZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOktaNetworkZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOktaNetworkZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaNetworkZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.asns">asns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocations">dynamic_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicProxyType">dynamic_proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.usage">usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExcludeInput">dynamic_locations_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExcludeInput">ip_service_categories_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesIncludeInput">ip_service_categories_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExclude">dynamic_locations_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExclude">ip_service_categories_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesInclude">ip_service_categories_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.asns"></a>

```python
asns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_locations`<sup>Required</sup> <a name="dynamic_locations" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocations"></a>

```python
dynamic_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dynamic_proxy_type`<sup>Required</sup> <a name="dynamic_proxy_type" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicProxyType"></a>

```python
dynamic_proxy_type: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

##### `dynamic_locations_exclude_input`<sup>Optional</sup> <a name="dynamic_locations_exclude_input" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExcludeInput"></a>

```python
dynamic_locations_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_service_categories_exclude_input`<sup>Optional</sup> <a name="ip_service_categories_exclude_input" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExcludeInput"></a>

```python
ip_service_categories_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_service_categories_include_input`<sup>Optional</sup> <a name="ip_service_categories_include_input" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesIncludeInput"></a>

```python
ip_service_categories_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dynamic_locations_exclude`<sup>Required</sup> <a name="dynamic_locations_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExclude"></a>

```python
dynamic_locations_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_service_categories_exclude`<sup>Required</sup> <a name="ip_service_categories_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExclude"></a>

```python
ip_service_categories_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_service_categories_include`<sup>Required</sup> <a name="ip_service_categories_include" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesInclude"></a>

```python
ip_service_categories_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaNetworkZoneConfig <a name="DataOktaNetworkZoneConfig" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_network_zone

dataOktaNetworkZone.DataOktaNetworkZoneConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dynamic_locations_exclude: typing.List[str] = None,
  id: str = None,
  ip_service_categories_exclude: typing.List[str] = None,
  ip_service_categories_include: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dynamicLocationsExclude">dynamic_locations_exclude</a></code> | <code>typing.List[str]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.id">id</a></code> | <code>str</code> | ID of the network zone to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesExclude">ip_service_categories_exclude</a></code> | <code>typing.List[str]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesInclude">ip_service_categories_include</a></code> | <code>typing.List[str]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.name">name</a></code> | <code>str</code> | Name of the network zone to retrieve, conflicts with `id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dynamic_locations_exclude`<sup>Optional</sup> <a name="dynamic_locations_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dynamicLocationsExclude"></a>

```python
dynamic_locations_exclude: typing.List[str]
```

- *Type:* typing.List[str]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#dynamic_locations_exclude DataOktaNetworkZone#dynamic_locations_exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the network zone to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#id DataOktaNetworkZone#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_service_categories_exclude`<sup>Optional</sup> <a name="ip_service_categories_exclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesExclude"></a>

```python
ip_service_categories_exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#ip_service_categories_exclude DataOktaNetworkZone#ip_service_categories_exclude}

---

##### `ip_service_categories_include`<sup>Optional</sup> <a name="ip_service_categories_include" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesInclude"></a>

```python
ip_service_categories_include: typing.List[str]
```

- *Type:* typing.List[str]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#ip_service_categories_include DataOktaNetworkZone#ip_service_categories_include}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the network zone to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/network_zone#name DataOktaNetworkZone#name}

---



